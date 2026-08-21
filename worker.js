/* ==========================================================
   SCIENCE MASTER X — Cloudflare Worker (final, spec-exact)
   Deploy target: https://science-master-x-ai.riyansharya295.workers.dev

   CORS (exact per spec, on EVERY response):
     Access-Control-Allow-Origin:  https://riyansharya29.github.io
     Access-Control-Allow-Methods: POST, OPTIONS
     Access-Control-Allow-Headers: Content-Type

   Behaviour:
     OPTIONS (preflight) → 204 + CORS headers
     POST  (any path)    → { "message" } → OpenAI Responses API
                           → 200 { "answer": "..." } (JSON)
     other methods       → 405 + Allow header

   🔐 The key is read ONLY from env.OPENAI_API_KEY
      (wrangler secret put OPENAI_API_KEY). It is NEVER echoed.

   DEPLOY:  npx wrangler deploy worker.js --name science-master-x-ai
            (or paste this file in the CF dashboard → Save & Deploy)
   ========================================================== */

const ORIGIN = "https://riyansharya29.github.io";

const CORS = {
  "Access-Control-Allow-Origin": ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

const SYSTEM_PROMPT = `You are Science AI for Science Master X, a CBSE Class 10 Science tutor.
Answer questions from Physics, Chemistry and Biology at Class 10 level.
Explain concepts clearly and simply.
For numerical problems use:
Given → Formula → Substitution → Calculation → Final Answer.
Help with NCERT revision, MCQs, PYQs and exam preparation.
Do not claim something is from NCERT unless it actually is.`;

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: Object.assign({ "Content-Type": "application/json" }, CORS)
  });
}

function extractAnswer(data) {
  if (typeof data.output_text === "string" && data.output_text.trim()) return data.output_text.trim();
  let out = "";
  if (Array.isArray(data.output)) {
    for (const item of data.output) {
      if (item && item.type === "message" && Array.isArray(item.content)) {
        for (const p of item.content) if (p && p.type === "output_text" && p.text) out += p.text;
      }
    }
  }
  return out.trim();
}

export default {
  async fetch(request, env) {

    // ---------- preflight ----------
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    // ---------- method gate ----------
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed. Use POST." }), {
        status: 405,
        headers: Object.assign(
          { "Content-Type": "application/json", "Allow": "POST, OPTIONS" },
          CORS
        )
      });
    }

    // ---------- body ----------
    let body;
    try { body = await request.json(); } catch (e) {
      return json({ error: "Invalid JSON body." }, 400);
    }
    const message = body && typeof body.message === "string" ? body.message.trim() : "";
    if (!message) {
      return json({ error: "Message is required. Send { \"message\": \"...\" }." }, 400);
    }

    // ---------- server-side secret ----------
    const KEY = env.OPENAI_API_KEY;
    if (!KEY) {
      return json({ error: "OPENAI_API_KEY is not configured on the Worker. Run: wrangler secret put OPENAI_API_KEY" }, 503);
    }

    // ---------- OpenAI Responses API ----------
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 30000);

    let res;
    try {
      res = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + KEY
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          instructions: SYSTEM_PROMPT,
          input: [{ role: "user", content: message.slice(0, 4000) }],
          temperature: 0.5,
          max_output_tokens: 700
        }),
        signal: controller.signal
      });
    } catch (e) {
      clearTimeout(timer);
      return json(
        { error: e && e.name === "AbortError" ? "The AI request timed out." : "Could not reach the AI service." },
        504
      );
    }
    clearTimeout(timer);

    if (res.status === 401) return json({ error: "The Worker's OpenAI key was rejected. Re-run: wrangler secret put OPENAI_API_KEY" }, 502);
    if (res.status === 429) return json({ error: "OpenAI rate limit reached. Please wait a moment and try again." }, 429);
    if (!res.ok) return json({ error: "The AI service returned an error (" + res.status + ")." }, 502);

    let data;
    try { data = await res.json(); } catch (e) {
      return json({ error: "Unreadable response from the AI service." }, 502);
    }

    const answer = extractAnswer(data);
    if (!answer) return json({ error: "Empty response from the AI service." }, 502);

    return json({ answer: answer }, 200);
  }
};
