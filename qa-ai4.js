const { JSDOM, VirtualConsole } = require('jsdom');
const sleep = ms => new Promise(r => setTimeout(r, ms));
let pass = 0, fail = 0; const ok = (c, l) => { console.log((c ? '✓' : '✗') + ' ' + l); c ? pass++ : fail++; };

async function run(shimFn, expect) {
    const logs = [];
    const vc = new VirtualConsole();
    vc.on('jsdomError', () => {}); vc.on('error', () => {});
    vc.on('log', (...a) => logs.push('log ' + a.join(' ')));
    vc.on('error', (...a) => logs.push('err ' + a.join(' ')));
    const dom = await JSDOM.fromURL('http://localhost:3000/ai.html', {
        runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole: vc,
        beforeParse(w) { w.fetch = shimFn; }
    });
    const d = dom.window.document;
    await sleep(1100);
    d.getElementById('chatInput').value = 'Explain Ohm\'s law';
    d.getElementById('sendBtn').click();
    await sleep(1000);
    const err = [...d.querySelectorAll('.bubble.error')].pop();
    const text = err ? err.textContent : '';
    ok(expect(text, logs), expect.name);
    dom.window.close();
}

(async () => {
    // 1) fetch rejects → exact message + console error
    await run(
        () => Promise.reject(new TypeError('Failed to fetch')),
        function networkFailShowsExactMessage(text, logs) {
            return text.includes('Could not connect to Science AI Worker.') &&
                logs.some(l => l.startsWith('err [Science AI] fetch failed'));
        }
    );
    // 2) Worker 401 → actual safe error surfaced + status/body logged
    await run(
        () => Promise.resolve({ ok: false, status: 401, json: async () => ({ error: 'Incorrect API key provided: undefined.' }) }),
        function workerErrorSurfacedWithLogs(text, logs) {
            return text.includes('Incorrect API key provided') &&
                logs.some(l => l.includes('[Science AI] HTTP 401')) &&
                logs.some(l => l.includes('error response'));
        }
    );
    // 3) 200 {answer} renders
    await run(
        () => Promise.resolve({ ok: true, status: 200, json: async () => ({ answer: 'OHM-RENDER-OK V = IR' }) }),
        function answerRenders(text) {
            return !text; // no error bubble at all
        }
    );
    console.log('PASS: ' + pass + ' FAIL: ' + fail);
    process.exit(fail ? 1 : 0);
})().catch(e => { console.log('crashed', e.message); process.exit(1); });
