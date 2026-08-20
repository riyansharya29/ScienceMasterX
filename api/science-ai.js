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
