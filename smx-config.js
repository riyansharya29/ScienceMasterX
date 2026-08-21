/* ==========================================================
   smx-config.js — Science Master X deployment config
   Contains ONLY the public Worker URL (safe to commit).
   The OpenAI key lives ONLY inside the Worker (secret).
   The frontend POSTs { "message" } directly to this URL —
   never to the GitHub Pages origin.
   ========================================================== */

window.SMX_AI_ENDPOINT = "https://science-master-x-ai.riyansharya295.workers.dev/";
