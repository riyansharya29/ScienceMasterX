const { JSDOM, VirtualConsole } = require('jsdom');
const http = require('http');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const vc = new VirtualConsole(); vc.on('jsdomError', () => { }); vc.on('error', () => { });
let pass = 0, fail = 0; const ok = (c, l) => { console.log((c ? '✓' : '✗') + ' ' + l); c ? pass++ : fail++; };

// real fetch shim → hits our backend over HTTP
function shimFetch(url, opts = {}) {
    return new Promise((resolve, reject) => {
        const u = new URL(url, 'http://localhost:3000');
        const req = http.request({ host: u.hostname, port: u.port, path: u.pathname, method: opts.method || 'GET', headers: opts.headers || {} }, res => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => resolve({
                ok: res.statusCode >= 200 && res.statusCode < 300,
                status: res.statusCode,
                json: async () => JSON.parse(data),
                text: async () => data
            }));
        });
        req.on('error', reject);
        if (opts.body) req.write(opts.body);
        req.end();
    });
}

JSDOM.fromURL('http://localhost:3000/ai.html', {
    runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole: vc,
    beforeParse(w) { w.fetch = (u, o) => shimFetch(u, o); }
}).then(async dom => {
    const w = dom.window, d = w.document;
    await sleep(1200);
    // TEST 3: message → backend (503 no key) → clear config error in UI
    d.getElementById('chatInput').value = "Explain Ohm's law for Class 10.";
    d.getElementById('sendBtn').click();
    ok(d.getElementById('sendBtn').disabled === true, 'send disabled while waiting');
    await sleep(1500);
    const err = [...d.querySelectorAll('.bubble.error')].pop();
    ok(!!err, 'error bubble when backend reports problem');
    ok(err && err.textContent.includes('OPENAI_API_KEY is not configured'), 'TEST 5: clear configuration error surfaced in chat');
    ok(err && err.querySelectorAll('[data-act="retry"]').length >= 1, 'retry option present');
    // offline opt-in still available
    err.querySelector('[data-act="offline"]').click();
    await sleep(400);
    const bubbles = [...d.querySelectorAll('.msgRow.ai')].filter(r => !r.classList.contains('typingRow'));
    ok(bubbles[bubbles.length - 1].textContent.includes('Offline tutor'), 'explicit opt-in offline tutor labelled');
    console.log('PASS: ' + pass + ' FAIL: ' + fail);
    process.exit(fail ? 1 : 0);
});
