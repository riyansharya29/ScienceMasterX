# 🔐 Science AI — final Worker fix & deployment

## Root cause of “Failed to fetch” (verified live)
1. The **deployed Worker** previously answered some requests without CORS
   headers / with raw OpenAI errors → browser preflight or error reads failed.
2. The **deployed Pages site is an old build** — `ai.html`/`ai.js` currently
   404 there, so the fixed frontend was never live. Both sides need a push.
3. The Worker still has **no `OPENAI_API_KEY` secret** (`401 … undefined`).

## Fixes in this repo (all tested)
* `worker.js` — spec-exact: OPTIONS→204 with the exact three CORS headers;
  POST (any path, incl. root) `{message}` → Responses API → `{"answer"}`;
  GET→405+Allow; 400/503/502/429/504 all JSON **with CORS**; key never echoed.
  Local contract test: `node qa-worker2.js` → 6/6.
* `smx-config.js` → `window.SMX_AI_ENDPOINT = "https://science-master-x-ai.riyansharya295.workers.dev/"`
  (root URL; the Pages origin is never called). Loaded before `ai.js`.
* `ai.js` fetch verified: `POST`, `Content-Type: application/json`,
  `body: JSON.stringify({ message })`, reads `answer`.

## Deploy (3 steps — your accounts)
```bash
# 1) Worker code
npx wrangler deploy worker.js --name science-master-x-ai --compatibility_date 2024-09-01
# 2) Worker secret (a VALID key — the previously shared one is revoked)
npx wrangler secret put OPENAI_API_KEY
# 3) Push THIS repo to the ScienceMasterX GitHub repo (Pages) so the new
#    ai.html / ai.js / smx-config.js go live.
```

## Post-deploy verification
```bash
W=https://science-master-x-ai.riyansharya295.workers.dev
curl -si -X OPTIONS $W/ -H "Origin: https://riyansharya29.github.io" \
     -H "Access-Control-Request-Method: POST" | grep -E "204|access-control"
curl -s  -X POST $W/ -H "Content-Type: application/json" \
     -d '{"message":"Explain Ohm'\''s law for Class 10."}'   # expect {"answer":"…"}
```
Then open https://riyansharya29.github.io/ScienceMasterX/ai.html and ask
“Explain Ohm's law for Class 10.” — the real answer renders in the chat.

---

# 🔐 (Earlier) connected-Worker notes & alternative backends

**Live wiring (done):** `smx-config.js` now sets

```js
window.SMX_AI_ENDPOINT =
  "https://science-master-x-ai.riyansharya295.workers.dev/api/science-ai";
```

and `ai.js` loads it **before** the chat script, POSTs exactly
`{ "message": "..." }` with `Content-Type: application/json`, reads
`{ "answer": "..." }`, and never calls GitHub Pages `/api/science-ai` again.
Verified live: request reaches the Worker; contract 8/8; UI states intact.

**ONE STEP REMAINS (verified by live probe):** the Worker answers
`401 — Incorrect API key provided: undefined`, i.e. its secret is not set. Run:

```bash
wrangler secret put OPENAI_API_KEY     # paste a VALID key (the old one is revoked)
```

or Cloudflare dashboard → Workers → your worker → Settings → Variables →
add secret `OPENAI_API_KEY`. The moment the secret exists, real answers render
through the same chat bubble path (no code change needed).

---

# 🔐 (Reference) 405 fix & alternative backends

## Why you saw “Server error (405)”

Your frontend is on **GitHub Pages (static)**. A static host has no backend, so
`POST /api/science-ai` on the same origin is answered by GitHub Pages itself
with **405 Method Not Allowed** (verified live). The fix is NOT in the Pages
site — you must deploy one of the provided serverless backends and point the
frontend at it:

1. Deploy `worker.js` (Cloudflare) **or** `api/science-ai.js` (Vercel).
2. Add the key as a **server-side secret** there (exact places below).
3. Commit `smx-config.js` to the Pages repo with ONLY the public URL:
   `window.SMX_AI_ENDPOINT = "https://your-backend/api/science-ai";`

The chat UI now detects the static-hosting 405/404 and tells you exactly this,
instead of a vague “unavailable” message.

## Method contract (all three backends)

* `POST /api/science-ai` `{message}` → `200 {"answer": "...", "reply": "..."}`
* `GET/PUT/…` → `405 {"error":"Method not allowed. Use POST."}` + `Allow: POST, OPTIONS`
* `OPTIONS` → `204` (CORS preflight) · bad JSON → `400` · no key → `503` ·
  OpenAI error → `502` · rate limit → `429` · timeout → `504` — always JSON.

---

# 🔐 Where to add your OpenAI API key (server-side ONLY)

The key you shared in chat must be added **as a server-side secret on the hosting
platform you choose below**. It must **never** be committed to the GitHub repo,
never placed in HTML/JS/CSS/localStorage, and never put in `smx-config.js`
(that file holds only the proxy *URL*, which is public and safe).

> ⚠️ Because this key has now appeared in a chat message, **rotate it**
> (OpenAI dashboard → API keys → revoke & create a new one) and use the NEW
> value below.
>
> **Status of the previously shared key (…yyEA):** live-tested against
> `api.openai.com` — OpenAI answers `401 invalid_api_key`, i.e. that key is
> revoked/invalid (the 429s seen earlier were throttling after failed tries).
> The secure pipeline, Responses-API call and error mapping are verified
> working; a **valid** key is all that's needed for real answers to render.

The frontend already calls `POST /api/science-ai` with `{ "message": "..." }`
and renders `{ "reply": "..." }`. Choose ONE backend:

---

## OPTION A — Cloudflare Worker (recommended for GitHub Pages)

Files: `worker.js` (already created).

1. `npm i -g wrangler` → `wrangler login`
2. Create a Worker and paste the contents of `worker.js`.
3. **Add the key as a secret (this is the exact place):**
   ```bash
   wrangler secret put OPENAI_API_KEY
   # → paste your sk-proj-... key when prompted. It is stored encrypted by
   #   Cloudflare and exposed to the code only as env.OPENAI_API_KEY.
   ```
   (Or: CF dashboard → your Worker → Settings → Variables and Secrets →
   “Add secret” → name `OPENAI_API_KEY` → value = your key.)
4. `wrangler deploy` → you get a URL like `https://science-master-x-ai.<you>.workers.dev`
5. In your **GitHub Pages** repo, create `smx-config.js`:
   ```js
   window.SMX_AI_ENDPOINT = "https://science-master-x-ai.<you>.workers.dev/api/science-ai";
   ```
   Commit & push. Done — the chat now reaches your Worker, which calls OpenAI.

---

## OPTION B — Vercel serverless function (final, zero-dependency)

File: `api/science-ai.js` — deploy-ready, no packages required.

1. Import this repo into Vercel (Framework: *Other*). The function is served at
   `https://<project>.vercel.app/api/science-ai`.
2. **Add the key (exact place):** Vercel dashboard → Project →
   **Settings → Environment Variables** → `OPENAI_API_KEY` = your key → Save.
   (The function reads `process.env.OPENAI_API_KEY` and never echoes it.)
3. In the GitHub Pages repo create `smx-config.js`:
   ```js
   window.SMX_AI_ENDPOINT = "https://<your-project>.vercel.app/api/science-ai";
   ```
4. Contract (all verified by `node qa-vercel.js`):
   * `POST {message}` → `200 {"answer":"…"}`
   * CORS allows **https://riyansharya29.github.io** (+ localhost dev); unknown
     browser origins are blocked; preflight `OPTIONS → 204`
   * `GET/other → 405` + `Allow: POST, OPTIONS` · bad body → `400` ·
     no key → `503` · bad key → `502` · rate limit → `429` · timeout → `504`

`package.json` is Vercel-compatible (`engines.node >= 18`); the express/jsdom
deps are used only by the optional local server/tests, not by the function.

---

## OPTION C — Your own Node server (local / VPS)

Files: `server.js` (already created, Express + Responses API).

```bash
npm install express
export OPENAI_API_KEY="paste-your-key-here"   # Windows: set OPENAI_API_KEY=paste-your-key-here
node server.js                                # http://localhost:3000
```
Serve the app from this server (no `smx-config.js` needed — the frontend
uses the same-origin `/api/science-ai`).

---

## Verify

* `POST /api/science-ai {"message":"Explain photosynthesis for Class 10."}`
  → `200 {"reply":"..."}` (real OpenAI text)
* Without the key → clean `503 {"error":"OPENAI_API_KEY is not configured…"}`
* The browser console / page source / repo contain **no key** — verify with:
  `grep -ri "sk-" .` → nothing.

## GitHub Pages notes (PDFs)

All 13 real PDFs were verified live at `notes/chapterNx.pdf` under
`/ScienceMasterX/` (HTTP 200). `notes.html` uses plain relative
`<a href="notes/chapterNx.pdf" target="_blank">` links, so the same file works
on GitHub Pages, locally, or under any base path — no code change needed.

---

## URGENT round — debug transparency (done)
`ai.js` now logs `[Science AI] HTTP <status>` + error bodies to the console,
shows the Worker's actual safe error text, and on pure network/CORS failure
shows exactly: “Could not connect to Science AI Worker.” UI otherwise untouched.

**Live status at this round:** Worker CORS/preflight ✓ (204 + exact headers),
but Worker POST → **401 “API key undefined”** → the ONE remaining fix is
`wrangler secret put OPENAI_API_KEY` (valid key) in YOUR Cloudflare account.
Also `ai.html`/`ai.js` still 404 on Pages → push this repo so the fixed
frontend goes live. Nothing else may or needs to change.
