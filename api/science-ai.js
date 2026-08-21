/* ==========================================================
   SCIENCE MASTER X — Vercel serverless backend
   File: api/science-ai.js   (zero dependencies — deploy as-is)

   ARCHITECTURE
   GitHub Pages frontend  →  POST {message}  →  this function
   → OpenAI Responses API → { "answer": "..." } → chatbot

   🔐 SECURITY
   • The OpenAI key is read ONLY from process.env.OPENAI_API_KEY
     (Vercel → Project → Settings → Environment Variables).
   • It is NEVER echoed in responses, logs, or headers.
   • Nothing secret lives in the frontend / GitHub repo.

   DEPLOY
   1. Push this repo (or just api/ + package.json) to Vercel.
   2. Add env var OPENAI_API_KEY in the Vercel dashboard.
   3. In the GitHub Pages repo create smx-config.js:
        window.SMX_AI_ENDPOINT =
          "https://YOUR-PROJECT.vercel.app/api/science-ai";
   ========================================================== */

const SYSTEM_PROMPT = `You are Science AI for Science Master X, a CBSE Class 10 Science tutor.
Answer questions from Physics, Chemistry and Biology at Class 10 level.
Explain concepts clearly and simply.
For numerical problems use:
Given → Formula → Substitution → Calculation → Final Answer.
Help with NCERT revision, MCQs, PYQs and exam preparation.
Do not claim something is from NCERT unless it actually is.`;

/* ---------- CORS: allow the GitHub Pages frontend + local dev ---------- */
const ALLOWED_ORIGINS = [
  "https://riyansharya29.github.io"
];
const DEV_ORIGIN = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

function applyCors(req, res) {
  const origin = req.headers && req.headers.origin;
  if (origin && (ALLOWED_ORIGINS.includes(origin) || DEV_ORIGIN.test(origin))) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  } else if (!origin) {
    // non-browser clients (curl, tests) — CORS not applicable
    res.setHeader("Access-Control-Allow-Origin", "*");
  }
  // unknown browser origins get no CORS headers → blocked by the browser
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Max-Age", "86400");
}

function json(res, status, body) {
  res.status(status);
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

/** Extract the model text from a Responses API payload. */
function extractAnswer(data) {
  if (typeof data.output_text === "string" && data.output_text.trim()) return data.output_text.trim();
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

export default async function handler(req, res) {
  applyCors(req, res);

  // Preflight
  if (req.method === "OPTIONS") {
    res.status(204);
    res.end();
    return;
  }

  // Only POST is supported → proper 405 + Allow header
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return json(res, 405, { error: "Method not allowed. Use POST." });
  }

  // ---------- parse body (object or raw JSON string) ----------
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) {
      return json(res, 400, { error: "Invalid JSON body." });
    }
  }
  const message = body && typeof body.message === "string" ? body.message.trim() : "";

  // ---------- validation ----------
  if (!message) {
    return json(res, 400, { error: "Message is required. Send { \"message\": \"...\" }." });
  }

  // ---------- server-side secret ----------
  const KEY = process.env.OPENAI_API_KEY;
  if (!KEY) {
    return json(res, 503, {
      error: "OPENAI_API_KEY is not configured. Add it in Vercel → Settings → Environment Variables."
    });
  }

  // Optional context the frontend may send (never required)
  const mode = body && typeof body.mode === "string" ? body.mode : "";
  const MODES = {
    explain: "\n\nCurrent mode: EXPLAIN — simple, clear Class 10 explanation with an easy example.",
    numerical: "\n\nCurrent mode: NUMERICAL — solve using Given / Formula / Substitution / Calculation / Final Answer, with SI units.",
    practice: "\n\nCurrent mode: PRACTICE — generate MCQs / Assertion-Reason / Case-study questions with answers and explanations.",
    quick: "\n\nCurrent mode: QUICK REVISION — short bullets, key formulas and facts only.",
    exam: "\n\nCurrent mode: EXAM — Answer, then Important keywords, then CBSE marking-point style explanation.",
    chapter: "\n\nCurrent mode: CHAPTER REVISION — concise bullet-point revision with formulas and diagrams."
  };
  let instructions = SYSTEM_PROMPT;
  if (MODES[mode]) instructions += MODES[mode];

  // ---------- call OpenAI Responses API ----------
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);

  let response;
  try {
    response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + KEY          // key stays server-side
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        instructions: instructions,
        input: [{ role: "user", content: message.slice(0, 4000) }],
        temperature: 0.5,
        max_output_tokens: 700
      }),
      signal: controller.signal
    });
  } catch (err) {
    clearTimeout(timer);
    if (err && err.name === "AbortError") {
      return json(res, 504, { error: "The AI request timed out. Please try again." });
    }
    return json(res, 502, { error: "Could not reach the AI service." });
  }
  clearTimeout(timer);

  // ---------- OpenAI error mapping (clean JSON, no secrets) ----------
  if (response.status === 401) {
    return json(res, 502, { error: "The server's OpenAI key was rejected. Check OPENAI_API_KEY." });
  }
  if (response.status === 429) {
    return json(res, 429, { error: "OpenAI rate limit reached. Please wait a moment and try again." });
  }
  if (!response.ok) {
    return json(res, 502, { error: "The AI service returned an error (" + response.status + "). Please try again." });
  }

  let data;
  try { data = await response.json(); } catch (e) {
    return json(res, 502, { error: "Unreadable response from the AI service." });
  }

  const answer = extractAnswer(data);
  if (!answer) {
    return json(res, 502, { error: "Empty response from the AI service." });
  }

  // ---------- success ----------
  return json(res, 200, { answer: answer });
}
