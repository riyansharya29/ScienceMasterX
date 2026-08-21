const { JSDOM, VirtualConsole } = require('jsdom');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const vc = new VirtualConsole(); vc.on('jsdomError', () => { }); vc.on('error', () => { });
let pass = 0, fail = 0; const ok = (c, l) => { console.log((c ? '✓' : '✗') + ' ' + l); c ? pass++ : fail++; };

// shim: first call → clean 200 {reply} (pipeline render proof), then 429 (real error state)
let calls = 0;
function shim(url, opts = {}) {
    calls++;
    if (calls === 1) {
        return Promise.resolve({ ok: true, status: 200, json: async () => ({ reply: "PHOTOSYNTHESIS-RENDER-OK: green plants make food using sunlight, CO2 and water." }) });
    }
    return Promise.resolve({ ok: false, status: 429, json: async () => ({ error: "OpenAI rate limit reached. Please wait a moment and try again." }) });
}

JSDOM.fromURL('http://localhost:3000/ai.html', {
    runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole: vc,
    beforeParse(w) { w.fetch = (u, o) => shim(u, o); }
}).then(async dom => {
    const w = dom.window, d = w.document;
    await sleep(1100);
    d.getElementById('chatInput').value = "Explain photosynthesis for Class 10.";
    d.getElementById('sendBtn').click();
    await sleep(2600); // allow typewriter to finish (short text)
    const bubbles = [...d.querySelectorAll('.msgRow.ai')].filter(r => !r.classList.contains('typingRow'));
    const last = bubbles[bubbles.length - 1];
    ok(last.textContent.includes('PHOTOSYNTHESIS-RENDER-OK'), 'backend {reply} renders verbatim in chat UI');
    ok(last.querySelector('[data-act="copy"]') && last.querySelector('[data-act="regen"]'), 'copy + regenerate present on AI reply');
    // second message → 429 real error state
    d.getElementById('chatInput').value = "Solve a simple electricity numerical.";
    d.getElementById('sendBtn').click();
    await sleep(1200);
    const err = [...d.querySelectorAll('.bubble.error')].pop();
    ok(!!err && err.textContent.includes('rate limit'), '429 from API surfaces as clean chat error');
    ok(!!err.querySelector('[data-act="retry"]'), 'retry available on error');
    console.log('PASS: ' + pass + ' FAIL: ' + fail);
    process.exit(fail ? 1 : 0);
});
