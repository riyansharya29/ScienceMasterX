/* Local smoke-test for api/science-ai.js (no Vercel account needed).
   Mocks req/res, transforms the ESM export to CJS, runs the contract. */
const fs = require("fs");

let src = fs.readFileSync("api/science-ai.js", "utf8");
src = src.replace("export default async function handler", "async function handler");
src += "\nmodule.exports = handler;";
const handler = new Function("module", "process", src + "")(
    { exports: {} }, process
);
const mod = { exports: {} };
new Function("module", src)(mod);
const fn = mod.exports;

let pass = 0, fail = 0;
const ok = (c, l) => { console.log((c ? "✓" : "✗") + " " + l); c ? pass++ : fail++; };

function mockReq({ method = "POST", origin, bodyObj, bodyStr }) {
    const headers = { "content-type": "application/json" };
    if (origin) headers.origin = origin;
    return { method, headers, body: bodyStr !== undefined ? bodyStr : bodyObj };
}
function mockRes() {
    const r = { code: 0, headers: {}, body: "" };
    r.status = c => { r.code = c; return r; };
    r.setHeader = (k, v) => { r.headers[k.toLowerCase()] = v; return r; };
    r.end = b => { r.body = b || ""; return r; };
    return r;
}

(async () => {
    // GET → 405 + Allow
    let res = mockRes();
    await fn(mockReq({ method: "GET" }), res);
    ok(res.code === 405 && /POST/.test(res.headers.allow || "") && JSON.parse(res.body).error, "GET → 405 JSON + Allow header");

    // OPTIONS → 204 + CORS
    res = mockRes();
    await fn(mockReq({ method: "OPTIONS", origin: "https://riyansharya29.github.io" }), res);
    ok(res.code === 204 && res.headers["access-control-allow-origin"] === "https://riyansharya29.github.io", "OPTIONS → 204 + CORS for GitHub Pages origin");

    // POST empty message → 400
    res = mockRes();
    await fn(mockReq({ bodyObj: { message: "   " } }), res);
    ok(res.code === 400, "empty message → 400");

    // POST invalid JSON string → 400
    res = mockRes();
    await fn(mockReq({ bodyStr: "not-json" }), res);
    ok(res.code === 400, "invalid JSON → 400");

    // POST no key → 503
    delete process.env.OPENAI_API_KEY;
    res = mockRes();
    await fn(mockReq({ bodyObj: { message: "Explain photosynthesis for CBSE Class 10." }, origin: "https://riyansharya29.github.io" }), res);
    ok(res.code === 503 && JSON.parse(res.body).error.includes("OPENAI_API_KEY"), "missing key → 503 JSON");
    ok(res.headers["access-control-allow-origin"] === "https://riyansharya29.github.io", "CORS echoes the GitHub Pages origin on POST");

    // POST unknown browser origin → no CORS header (blocked)
    res = mockRes();
    await fn(mockReq({ bodyObj: { message: "hi" }, origin: "https://evil.example.com" }), res);
    ok(!("access-control-allow-origin" in res.headers), "unknown browser origin gets no CORS header");

    // POST with the previously-shared (revoked) key → clean 502, key never echoed
    process.env.OPENAI_API_KEY = process.env.TEST_KEY || "sk-invalid-for-smoke-test";
    res = mockRes();
    await fn(mockReq({ bodyObj: { message: "What is Ohm's law?" } }), res);
    const parsed = JSON.parse(res.body);
    ok([502, 429].includes(res.code) && parsed.error && !res.body.includes(process.env.OPENAI_API_KEY), "OpenAI rejection → clean JSON, key not leaked (got " + res.code + ")");

    console.log("\nPASS: " + pass + "  FAIL: " + fail);
    process.exit(fail ? 1 : 0);
})();
