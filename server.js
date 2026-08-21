/* ==========================================================
   SCIENCE MASTER X — SECURE AI BACKEND (server.js)
   ----------------------------------------------------------
   The ONLY place that touches OpenAI. The frontend calls
   POST /api/science-ai  (POST /api/chat kept as an alias)
   with { message, mode?, chapter?, history? } and receives
   { reply } — the API key NEVER leaves this process.

   Uses the modern OpenAI RESPONSES API (POST /v1/responses).

   SETUP
   1. npm install express
   2. export OPENAI_API_KEY="sk-..."   (Windows: set OPENAI_API_KEY=sk-...)
   3. node server.js   →  http://localhost:3000

   Requires Node 18+ (global fetch).
   ========================================================== */

const express = require("express");
const path = require("path");

const app = express();
app.use(express.json({ limit: "100kb" }));

// Serve the Science Master X app from this folder
app.use(express.static(path.join(__dirname)));

// 🔐 The API key lives ONLY in the server environment.
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Science Master X — Class 10 Science Tutor (exact system instruction)
const SYSTEM_PROMPT = `You are Science AI for Science Master X, a CBSE Class 10 Science tutor.
Answer questions from Physics, Chemistry and Biology at Class 10 level.
Explain concepts clearly and simply.
For numerical problems use:
Given → Formula → Substitution → Calculation → Final Answer.
Help with NCERT revision, MCQs, PYQs and exam preparation.
Do not claim something is from NCERT unless it actually is.`;

// Response-mode addendums
const MODE_INSTRUCTIONS = {
    explain: "\n\nCurrent mode: EXPLAIN. Explain the concept simply and clearly with easy examples appropriate for Class 10.",
    numerical: "\n\nCurrent mode: NUMERICAL. Provide or solve a numerical using the Given / Formula / Substitution / Calculation / Final answer structure. Always include SI units.",
    practice: "\n\nCurrent mode: PRACTICE. Generate practice questions (MCQs, PYQ-style, Assertion-Reason or Case Study as asked).",
    quick: "\n\nCurrent mode: QUICK REVISION. Respond with short bullets, important formulas and key facts only.",
    exam: "\n\nCurrent mode: EXAM MODE. Structure the response as: Answer, then 'Important keywords', then CBSE marking-point style explanation.",
    chapter: "\n\nCurrent mode: CHAPTER REVISION. Give a concise bullet-point chapter revision including important formulas and diagrams to remember."
};

/** Extract the model's text from a Responses API payload. */
function extractReply(data) {
    if (typeof data.output_text === "string" && data.output_text.trim()) return data.output_text;
    let out = "";
    if (Array.isArray(data.output)) {
        for (const item of data.output) {
            if (item && item.type === "message" && Array.isArray(item.content)) {
                for (const part of item.content) {
                    if (part && part.type === "output_text" && part.text) out += part.text;
                }
            }
        }
    }
    return out.trim();
}

async function scienceAiHandler(req, res) {
    try {
        const { message, mode, chapter, history = [] } = req.body || {};

        // — empty message —
        if (!message || typeof message !== "string" || !message.trim()) {
            return res.status(400).json({ error: "Message is required." });
        }

        // — missing API key —
        if (!OPENAI_API_KEY) {
            return res.status(503).json({
                error: "OPENAI_API_KEY is not configured on the server. Set it as an environment variable and restart (node server.js)."
            });
        }

        // — build conversation (short & safe) —
        const safeHistory = Array.isArray(history)
            ? history
                .filter(m => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
                .slice(-10)
                .map(m => ({ role: m.role, content: m.content.slice(0, 2000) }))
            : [];

        let system = SYSTEM_PROMPT;
        if (mode && MODE_INSTRUCTIONS[mode]) system += MODE_INSTRUCTIONS[mode];
        if (chapter) system += "\n\nThe student is currently studying CBSE Class 10 Science Chapter " + chapter + ". Prefer context from that chapter when relevant.";

        // — timeout guard (30s) —
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 30000);

        let response;
        try {
            response = await fetch("https://api.openai.com/v1/responses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + OPENAI_API_KEY
                },
                body: JSON.stringify({
                    model: process.env.OPENAI_MODEL || "gpt-4o-mini",
                    instructions: system,
                    input: [
                        ...safeHistory,
                        { role: "user", content: message.slice(0, 2000) }
                    ],
                    temperature: 0.5,
                    max_output_tokens: 700
                }),
                signal: controller.signal
            });
        } catch (err) {
            clearTimeout(timer);
            if (err.name === "AbortError") {
                return res.status(504).json({ error: "The AI request timed out. Please try again." });
            }
            console.error("network error:", err.message);
            return res.status(502).json({ error: "Could not reach the AI service. Check the server's internet connection." });
        }
        clearTimeout(timer);

        // — rate limit —
        if (response.status === 429) {
            return res.status(429).json({ error: "OpenAI rate limit reached. Please wait a moment and try again." });
        }

        // — any other API error —
        if (!response.ok) {
            const detail = await response.text().catch(() => "");
            console.error("OpenAI error:", response.status, detail.slice(0, 300));
            return res.status(502).json({ error: "The AI service returned an error (" + response.status + "). Please try again." });
        }

        const data = await response.json();
        const reply = extractReply(data);

        if (!reply) {
            return res.status(502).json({ error: "Empty response from the AI service." });
        }

        res.json({ answer: reply, reply });

    } catch (err) {
        console.error("chat error:", err.message);
        res.status(500).json({ error: "Something went wrong. Please try again." });
    }
}

// Frontend calls ONLY our own endpoint; key stays server-side.
app.post("/api/science-ai", scienceAiHandler);
app.post("/api/chat", scienceAiHandler);   // legacy alias

// Proper method handling: anything but POST on the endpoint → 405 + Allow,
// and a clean CORS preflight.
app.all(["/api/science-ai", "/api/chat"], (req, res) => {
    res.set({
        "Allow": "POST, OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
    });
    if (req.method === "OPTIONS") return res.status(204).end();
    res.status(405).json({ error: "Method not allowed. Use POST." });
});

// Invalid JSON body → clean JSON 400 (never an HTML stack trace)
app.use((err, req, res, next) => {
    if (err && (err.type === "entity.parse.failed" || err instanceof SyntaxError) && req.path.startsWith("/api/")) {
        return res.status(400).json({ error: "Invalid JSON body." });
    }
    next(err);
});

// Health check (never reveals the key value)
app.get("/api/health", (req, res) => {
    res.json({ ok: true, keyConfigured: Boolean(OPENAI_API_KEY) });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log("🧪 Science Master X running at http://localhost:" + PORT);
    if (!OPENAI_API_KEY) {
        console.log("⚠️  OPENAI_API_KEY not set — /api/science-ai will return a clear 503 until it is configured.");
    }
});
