const fs = require("fs");
let src = fs.readFileSync("worker.js", "utf8").replace("export default", "module.exports =");
const mod = { exports: {} };
new Function("module", src)(mod);
const worker = mod.exports;

let pass = 0, fail = 0;
const ok = (c, l) => { console.log((c ? "✓" : "✗") + " " + l); c ? pass++ : fail++; };
const H = (r, k) => r.headers.get(k);

(async () => {
  // 1) preflight
  let r = await worker.fetch(new Request("https://w/", {
    method: "OPTIONS",
    headers: { Origin: "https://riyansharya29.github.io", "Access-Control-Request-Method": "POST", "Access-Control-Request-Headers": "content-type" }
  }), {});
  ok(r.status === 204 && H(r, "access-control-allow-origin") === "https://riyansharya29.github.io"
    && H(r, "access-control-allow-methods") === "POST, OPTIONS"
    && H(r, "access-control-allow-headers") === "Content-Type", "OPTIONS → 204 + exact CORS headers");

  // 2) GET → 405 + Allow + CORS
  r = await worker.fetch(new Request("https://w/", { method: "GET" }), {});
  ok(r.status === 405 && /POST/.test(H(r, "allow") || "") && H(r, "access-control-allow-origin") === "https://riyansharya29.github.io", "GET → 405 + Allow + CORS");

  // 3) POST empty message → 400 + CORS
  r = await worker.fetch(new Request("https://w/", { method: "POST", headers: { "Content-Type": "application/json" }, body: '{"message":"  "}' }), {});
  ok(r.status === 400 && H(r, "access-control-allow-origin") === "https://riyansharya29.github.io", "empty message → 400 + CORS");

  // 4) POST invalid JSON → 400
  r = await worker.fetch(new Request("https://w/", { method: "POST", body: "nope" }), {});
  ok(r.status === 400, "invalid JSON → 400");

  // 5) POST without key → 503 + CORS
  r = await worker.fetch(new Request("https://w/", { method: "POST", body: '{"message":"hi"}' }), {});
  ok(r.status === 503 && (await r.json()).error.includes("OPENAI_API_KEY"), "missing secret → 503 JSON + CORS");

  // 6) POST with dummy key → OpenAI 401 → 502, key never echoed
  const KEY = "sk-invalid-dummy-key";
  r = await worker.fetch(new Request("https://w/", { method: "POST", body: '{"message":"Explain Ohm\'s law for Class 10."}' }), { OPENAI_API_KEY: KEY });
  const txt = await r.text();
  ok(r.status === 502 && !txt.includes(KEY) && H(r, "content-type").includes("application/json"), "OpenAI rejection → 502 JSON, key not leaked, Content-Type json");

  console.log("PASS: " + pass + "  FAIL: " + fail);
  process.exit(fail ? 1 : 0);
})().catch(e => { console.log("crashed:", e.message); process.exit(1); });
