/* ==========================================================
   SCIENCE MASTER X — SCIENCE AI CHAT CONTROLLER (ai.js) v2
   ----------------------------------------------------------
   SECURITY MODEL (unchanged):
   • The frontend NEVER contains or stores an OpenAI API key.
   • POST /api/chat with { message, mode, chapter, history }.
   • The backend (server.js) holds OPENAI_API_KEY as an env var.
   • If unreachable → clearly-labelled offline NCERT tutor.
   v2 adds: response modes, chapter context, copy/regenerate,
   stop generation, typewriter streaming, spec error states.
   ========================================================== */

// 🔌 BACKEND INTEGRATION — the frontend ONLY calls the secure
// serverless endpoint defined in smx-config.js (loaded BEFORE this
// script). The OpenAI key lives ONLY server-side (Worker secret).
// Resolution order:
//   1. localStorage "smxAiEndpoint"   (runtime override)
//   2. window.SMX_AI_ENDPOINT         (smx-config.js — your Cloudflare Worker)
// The same-origin GitHub Pages path is NEVER used (static hosts 405).
const AI_ENDPOINT =
    localStorage.getItem("smxAiEndpoint") ||
    (typeof window !== "undefined" && window.SMX_AI_ENDPOINT) ||
    null;

const CHAPTER_SHORT = {
    "1": "Chemical Reactions and Equations", "2": "Acids, Bases and Salts",
    "3": "Metals and Non-metals", "4": "Carbon and its Compounds",
    "5": "Life Processes", "6": "Control and Coordination",
    "7": "How do Organisms Reproduce?", "8": "Heredity",
    "9": "Light – Reflection and Refraction", "10": "Human Eye and Colourful World",
    "11": "Electricity", "12": "Magnetic Effects of Electric Current",
    "13": "Our Environment"
};

const ELS = {
    scroll: document.getElementById("chatScroll"),
    messages: document.getElementById("chatMessages"),
    typingRow: document.getElementById("typingRow"),
    input: document.getElementById("chatInput"),
    sendBtn: document.getElementById("sendBtn"),
    stopBtn: document.getElementById("stopBtn"),
    newChatBtn: document.getElementById("newChatBtn"),
    clearChatBtn: document.getElementById("clearChatBtn"),
    quickPrompts: document.getElementById("quickPrompts"),
    modeBar: document.getElementById("modeBar"),
    ctxChapter: document.getElementById("ctxChapter")
};

const STORAGE_KEY = "smxAiChat";
const REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let chatHistory = [];
let isWaiting = false;
let lastUserMessage = null;
let currentMode = (window.smxStore ? window.smxStore.get().aiMode : localStorage.getItem("smxAiMode")) || "explain";

// streaming state
let streamTimer = null;
let stopRequested = false;

// =========================
// Context (URL ?chapter=N wins, then saved)
// =========================
(function initContext() {
    const urlCh = new URLSearchParams(location.search).get("chapter");
    if (urlCh && CHAPTER_SHORT[urlCh]) localStorage.setItem("smxAiChapter", urlCh);
    const saved = localStorage.getItem("smxAiChapter") || "";
    if (ELS.ctxChapter) ELS.ctxChapter.value = saved;
})();

function getContext() { return ELS.ctxChapter ? ELS.ctxChapter.value : ""; }

function pushAi(text, source) {
    const msg = { role: "ai", text: text, source: source || "system" };
    chatHistory.push(msg);
    saveChat();
    addBubble(msg);
}

if (ELS.ctxChapter) {
    ELS.ctxChapter.addEventListener("change", () => {
        localStorage.setItem("smxAiChapter", ELS.ctxChapter.value);
        if (ELS.ctxChapter.value) {
            pushAi("Great — we're now focused on **Chapter " + ELS.ctxChapter.value + " — " +
                CHAPTER_SHORT[ELS.ctxChapter.value] + "**. Ask me anything about it! 💡", "system");
        }
    });
}

// =========================
// Modes
// =========================
function setMode(m) {
    currentMode = m;
    if (window.smxStore) window.smxStore.set({ aiMode: m });
    else localStorage.setItem("smxAiMode", m);
    document.querySelectorAll(".modeChip").forEach(c =>
        c.classList.toggle("active", c.dataset.mode === m));
}
ELS.modeBar.addEventListener("click", e => {
    const chip = e.target.closest(".modeChip");
    if (chip) setMode(chip.dataset.mode);
});
setMode(currentMode);

// =========================
// Persistence
// =========================
function loadChat() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (Array.isArray(saved) && saved.length) { chatHistory = saved.slice(-200); return; }
    } catch (e) { }
    chatHistory = [welcomeMessage()];
}
function saveChat() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(chatHistory.slice(-200))); } catch (e) { }
}

function welcomeMessage() {
    const name = localStorage.getItem("studentName");
    const greet = (name && name !== "CBSE Student") ? name : "there";
    const ctx = getContext();
    let ctxLine = "";
    if (ctx) ctxLine = "\n\n📖 I see you're studying **Chapter " + ctx + " — " + CHAPTER_SHORT[ctx] + "**. Ask me about " + CHAPTER_SHORT[ctx] + " — explanation, numerical, MCQs or a quick revision!";
    return {
        role: "ai",
        text: "Hi " + greet + "! 👋 I'm **Science AI** — your personal CBSE Class 10 Science tutor." + ctxLine +
            "\n\nPick a **mode** above (Explain, Numerical, Practice, Quick Revision, Exam, Chapter Revision) and ask me anything:\n• Concepts from **Physics, Chemistry & Biology**\n• **MCQs, PYQs, Assertion-Reason, Case Studies**\n• **Numericals** with step-by-step solutions\n• **Chapter revision** in quick bullet points",
        source: "system"
    };
}

// =========================
// Markdown rendering (safe)
// =========================
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function renderMarkdown(text) {
    let html = escapeHtml(text);
    html = html.replace(/```([\s\S]*?)```/g, (m, code) => "<pre>" + code.trim() + "</pre>");
    const lines = html.split("\n");
    let out = "", inList = false;
    for (const line of lines) {
        if (/^\s*[•\-\*]\s+/.test(line)) {
            if (!inList) { out += "<ul>"; inList = true; }
            out += "<li>" + line.replace(/^\s*[•\-\*]\s+/, "") + "</li>";
        } else {
            if (inList) { out += "</ul>"; inList = false; }
            out += line + "<br>";
        }
    }
    if (inList) out += "</ul>";
    html = out;
    html = html.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
    html = html.replace(/`([^`]+)`/g, "<code style='background:rgba(37,99,235,.09);padding:1px 5px;border-radius:6px;font-size:.92em'>$1</code>");
    html = html.replace(/(<br>){3,}/g, "<br><br>");
    return html;
}

function scrollToEnd() {
    requestAnimationFrame(() => { ELS.scroll.scrollTop = ELS.scroll.scrollHeight; });
}

// =========================
// Bubble rendering
// =========================
function buildRow(msg, animate) {
    const row = document.createElement("div");
    row.className = "msgRow " + (msg.role === "user" ? "user" : "ai");
    if (!animate || REDUCED) row.style.animation = "none";

    if (msg.role === "user") {
        row.innerHTML = '<div class="bubble">' + renderMarkdown(msg.text) + "</div>";
        return row;
    }

    const tag = msg.source === "offline"
        ? '<span class="srcTag">⚡ Offline tutor</span>'
        : (msg.source === "system" ? "" : '<span class="srcTag">🤖 Science AI</span>');

    row.innerHTML =
        '<div class="avatar">🧪</div><div class="bubbleWrap"><div class="bubble">' +
        '<span class="bubbleText"></span>' + tag +
        '<div class="msgActions">' +
        '<button type="button" data-act="copy">📋 Copy</button>' +
        '<button type="button" data-act="regen">🔄 Regenerate</button>' +
        '</div></div></div>';

    row.querySelector('[data-act="copy"]').onclick = () => {
        const txt = row.dataset.raw || "";
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(txt).then(
                () => window.smxToast ? smxToast("📋 Copied to clipboard", "success", 1600) : null,
                () => window.smxToast ? smxToast("Could not copy", "error") : null
            );
        } else if (window.smxToast) smxToast("Copy not supported here", "error");
    };
    row.querySelector('[data-act="regen"]').onclick = () => regenerate(row);
    return row;
}

function setBubbleText(row, text) {
    const span = row.querySelector(".bubbleText");
    if (span) span.innerHTML = renderMarkdown(text);
}

function addBubble(msg, animate = true) {
    const row = buildRow(msg, animate);
    row.dataset.raw = msg.text;
    if (msg.role !== "user") setBubbleText(row, msg.text);
    ELS.messages.appendChild(row);
    scrollToEnd();
    return row;
}

function renderAll() {
    ELS.messages.innerHTML = "";
    chatHistory.forEach(m => addBubble(m, false));
    scrollToEnd();
}

function showTyping(show) {
    ELS.typingRow.style.display = show ? "flex" : "none";
    if (show) scrollToEnd();
}
function setInputEnabled(enabled) { ELS.sendBtn.disabled = !enabled; }

// =========================
// Typewriter streaming (cancellable)
// =========================
function streamText(row, fullText, onDone) {
    if (REDUCED) { setBubbleText(row, fullText); onDone(false); return; }
    stopRequested = false;
    let i = 0;
    const chunk = 4;
    streamTimer = setInterval(() => {
        if (stopRequested) {
            clearInterval(streamTimer); streamTimer = null;
            setBubbleText(row, fullText);       // stop → show full answer
            onDone(true);
            return;
        }
        i = Math.min(fullText.length, i + chunk);
        setBubbleText(row, fullText.slice(0, i));
        scrollToEnd();
        if (i >= fullText.length) {
            clearInterval(streamTimer); streamTimer = null;
            onDone(false);
        }
    }, 14);
}

ELS.stopBtn.addEventListener("click", () => { stopRequested = true; });

// =========================
// Backend call — NO API KEY HERE
// =========================
async function callBackend(message) {
    if (typeof fetch !== "function") {
        throw new Error("This browser cannot reach the AI service (fetch unsupported).");
    }
    if (!AI_ENDPOINT) {
        throw new Error(
            "No AI endpoint configured. Create smx-config.js with " +
            "window.SMX_AI_ENDPOINT = \"https://your-worker/api/science-ai\" (see SETUP-AI.md)."
        );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    try {
        // Exact contract with the Cloudflare Worker:
        let res;
        try {
            res = await fetch(AI_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: message }),
                signal: controller.signal
            });
        } catch (netErr) {
            // fetch itself failed (network / CORS / blocked) — debug visibility
            console.error("[Science AI] fetch failed:", netErr && netErr.message, netErr);
            if (netErr && netErr.name === "AbortError") {
                throw new Error("The request timed out. Please try again.");
            }
            throw new Error("Could not connect to Science AI Worker.");
        }

        // Debug logging: status + body, as required for debugging
        console.log("[Science AI] HTTP " + res.status + " from " + AI_ENDPOINT);

        if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            console.error("[Science AI] error response:", res.status, body);
            throw new Error(body.error || body.answer || ("Server error (" + res.status + ")"));
        }
        const data = await res.json();
        const answer = (typeof data.answer === "string" && data.answer) ||
            (typeof data.reply === "string" && data.reply) || "";
        if (!answer.trim()) throw new Error("Empty answer from server");
        return answer;
    } finally { clearTimeout(timeout); }
}

// =========================
// Send flow
// =========================
async function handleSend(rawText, opts = {}) {
    if (isWaiting) return;
    const text = (rawText || "").trim();
    if (!text) return;

    if (!opts.regenerate) {
        lastUserMessage = text;
        chatHistory.push({ role: "user", text: text });
        saveChat();
        addBubble(chatHistory[chatHistory.length - 1]);
    }

    isWaiting = true;
    setInputEnabled(false);
    ELS.stopBtn.style.display = "grid";
    showTyping(true);

    // Real OpenAI response via our secure backend (Responses API).
    let reply = null, source = "ai", serverError = "";

    if (navigator.onLine !== false) {
        try {
            reply = await callBackend(text);
        } catch (e) {
            serverError = (e && e.message) ? e.message : "";
            reply = null;
        }
    } else {
        serverError = "You appear to be offline.";
    }

    showTyping(false);

    // Error state: clear message + Retry — the offline tutor is only
    // used when the student explicitly opts in (never a silent fake).
    if (reply === null) {
        isWaiting = false;
        setInputEnabled(true);
        ELS.stopBtn.style.display = "none";
        const row = document.createElement("div");
        row.className = "msgRow ai";
        row.innerHTML =
            '<div class="avatar">🧪</div><div class="bubble error">' +
            "😔 **Science AI is temporarily unavailable.**" +
            (serverError ? "<br><small>" + escapeHtml(serverError) + "</small>" : "") +
            '<br><button class="retryBtn" type="button" data-act="retry">🔄 Retry</button>' +
            '<button class="retryBtn" type="button" data-act="retry" style="margin-left:6px">↻ Try Again</button>' +
            '<button class="retryBtn" type="button" data-act="offline" style="margin-left:6px">⚡ Offline tutor</button></div>';
        row.querySelectorAll('[data-act="retry"]').forEach(b => b.onclick = () => {
            row.remove();
            if (lastUserMessage) handleSend(lastUserMessage, { regenerate: true });
        });
        row.querySelector('[data-act="offline"]').onclick = () => {
            row.remove();
            const local = window.smxLocalTutor ? window.smxLocalTutor(text, currentMode, getContext()) : null;
            if (local) {
                const msg = { role: "ai", text: local, source: "offline" };
                chatHistory.push(msg);
                saveChat();
                addBubble(msg);
            }
        };
        ELS.messages.appendChild(row);
        scrollToEnd();
        return;
    }

    const msg = { role: "ai", text: reply, source: source };
    chatHistory.push(msg);
    saveChat();

    const row = addBubble(msg, true);
    // clear then stream into it
    setBubbleText(row, "");
    streamText(row, reply, () => {
        isWaiting = false;
        setInputEnabled(true);
        ELS.stopBtn.style.display = "none";
        scrollToEnd();
    });
    playSound("ai");
}

function regenerate(row) {
    if (isWaiting) return;
    // find the last user message before regen
    const lastUser = [...chatHistory].reverse().find(m => m.role === "user");
    if (!lastUser) return;
    // remove this AI bubble from history + DOM
    const idx = chatHistory.indexOf(chatHistory.slice().reverse().find(m => m.role === "ai" && m.text === row.dataset.raw));
    row.remove();
    if (idx >= 0) chatHistory.splice(idx, 1);
    saveChat();
    lastUserMessage = lastUser.text;
    handleSend(lastUser.text, { regenerate: true });
}

// =========================
// Quick actions
// =========================
const QUICK = {
    "explain": () => {
        const c = getContext();
        return c ? "Explain Chapter " + c + " (" + CHAPTER_SHORT[c] + ") simply, with easy examples." : "Explain this concept simply: photosynthesis.";
    },
    "numerical": () => {
        const c = getContext();
        return "Solve a simple " + (c ? "Chapter " + c + " " : "electricity ") + "numerical step by step for Class 10.";
    },
    "mcq": () => {
        const c = getContext();
        return "Give me 5 MCQs" + (c ? " on Chapter " + c + " (" + CHAPTER_SHORT[c] + ")" : "") + ".";
    },
    "revise": () => {
        const c = getContext();
        return "Revise " + (c ? "Chapter " + c + " — " + CHAPTER_SHORT[c] : "this chapter") + " in short bullet points.";
    },
    "example": () => {
        const c = getContext();
        return "Give a real-life example" + (c ? " related to Chapter " + c + " (" + CHAPTER_SHORT[c] + ")" : " of a Class 10 science concept") + " and explain it simply.";
    },
    "test": () => "Test me with assertion-reason and case study questions."
};

ELS.quickPrompts.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    handleSend(QUICK[chip.dataset.act]());
});

// =========================
// Composer events
// =========================
ELS.sendBtn.addEventListener("click", () => handleSend(ELS.input.value));
ELS.input.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(ELS.input.value); }
});
ELS.input.addEventListener("input", () => {
    ELS.input.style.height = "auto";
    ELS.input.style.height = Math.min(ELS.input.scrollHeight, 120) + "px";
});

ELS.newChatBtn.addEventListener("click", () => {
    if (isWaiting) return;
    chatHistory = [welcomeMessage()];
    saveChat(); renderAll(); ELS.input.focus();
});
ELS.clearChatBtn.addEventListener("click", () => {
    if (isWaiting) return;
    if (!confirm("Clear this chat? This cannot be undone.")) return;
    chatHistory = [welcomeMessage()];
    saveChat(); renderAll();
});

// =========================
// Init
// =========================
loadChat();
renderAll();
ELS.input.focus();
