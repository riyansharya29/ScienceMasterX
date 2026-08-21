const { JSDOM, VirtualConsole } = require('jsdom');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const vc = new VirtualConsole(); vc.on('jsdomError', () => {}); vc.on('error', () => {});
let pass = 0, fail = 0; const ok = (c, l) => { console.log((c ? '✓' : '✗') + ' ' + l); c ? pass++ : fail++; };
const captured = [];

// real-network shim: perform the actual HTTPS call to the deployed Worker
function realFetch(url, opts = {}) {
    captured.push({ url, opts });
    return fetch(url, opts).then(async r => ({
        ok: r.ok, status: r.status,
        json: async () => r.json().catch(() => ({})),
        text: async () => r.text()
    }));
}

(async () => {
    const dom = await JSDOM.fromURL('http://localhost:3000/ai.html', {
        runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole: vc,
        beforeParse(w) { w.fetch = (u, o) => realFetch(u, o); }
    });
    const w = dom.window, d = w.document;
    await sleep(1400);

    // 1) smx-config.js loaded BEFORE ai.js and defines the Worker URL
    ok(w.SMX_AI_ENDPOINT === 'https://science-master-x-ai.riyansharya295.workers.dev/api/science-ai',
        'window.SMX_AI_ENDPOINT set from smx-config.js (Worker URL)');
    const scripts = [...d.querySelectorAll('script[src]')].map(s => s.getAttribute('src'));
    ok(scripts.indexOf('smx-config.js') < scripts.indexOf('ai.js'), 'smx-config.js loads before ai.js');

    // 2) send question → real POST to the Worker with exact {message} contract
    d.getElementById('chatInput').value = "What is Ohm's law?";
    d.getElementById('sendBtn').click();
    ok(d.getElementById('sendBtn').disabled === true, 'send disabled while waiting');
    await sleep(6000); // real network round-trip

    ok(captured.length >= 1 && captured[0].url.startsWith('https://science-master-x-ai.riyansharya295.workers.dev'),
        'frontend POSTs to the Cloudflare Worker (not GitHub Pages)');
    const sent = JSON.parse(captured[0].opts.body);
    ok(Object.keys(sent).join() === 'message' && sent.message === "What is Ohm's law?",
        'request body is exactly { "message": ... }');
    ok((captured[0].opts.headers || {})['Content-Type'] === 'application/json', 'Content-Type: application/json');

    // 3) response state rendered (Worker currently lacks its secret → clean error;
    //    once the secret is added this same path renders the real answer)
    const bubbles = [...d.querySelectorAll('.msgRow.ai')].filter(r => !r.classList.contains('typingRow'));
    const last = bubbles[bubbles.length - 1];
    const err = d.querySelector('.bubble.error');
    const gotReal = last && /V = IR|Ohm/i.test(last.textContent) && !err;
    const gotCleanErr = err && /API key|401|server/i.test(err.textContent);
    ok(gotReal || gotCleanErr, gotReal
        ? 'REAL OpenAI answer rendered in chat UI'
        : 'Worker responded; clean error shown (Worker secret not set yet): ' + (err ? err.textContent.slice(0, 90) : ''));
    ok(!!(err ? err.querySelector('[data-act="retry"]') : last.querySelector('[data-act="copy"]')),
        'loading/error or success affordances intact (retry/copy present)');

    console.log('PASS: ' + pass + '  FAIL: ' + fail);
    process.exit(fail ? 1 : 0);
})().catch(e => { console.log('crashed:', e.message); process.exit(1); });
