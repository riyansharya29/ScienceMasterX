/* v4 UI QA — quiz setup selectors, diagrams parity, notes tap */
const { JSDOM, VirtualConsole } = require('jsdom');
const sleep = ms => new Promise(r => setTimeout(r, ms));
let pass = 0, fail = 0;
const ok = (c, l) => { console.log((c ? '✓' : '✗') + ' ' + l); c ? pass++ : fail++; };
const vc = new VirtualConsole(); vc.on('jsdomError', () => { }); vc.on('error', () => { });

(async () => {
    // ---------- index: custom quiz setup ----------
    const d1 = await JSDOM.fromURL('http://localhost:3000/index.html', {
        runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole: vc,
        beforeParse(w) { w.open = (u) => { (w.__opened = w.__opened || []).push(u); return null; }; }
    });
    const w = d1.window, d = w.document;
    await sleep(1200);

    ok(!!d.getElementById('chapterCustom'), 'custom chapter selector present');
    ok(w.getComputedStyle(d.getElementById('chapter')).display === 'none', 'native chapter select hidden (no native picker)');
    ok(d.querySelectorAll('#chapterCustomPop .cOpt').length === 14, 'popover lists 14 options (All + 13)');

    // open popover, choose chapter 13
    d.getElementById('chapterCustomBtn').click();
    ok(d.getElementById('chapterCustom').classList.contains('open'), 'chapter popover opens');
    const opt13 = [...d.querySelectorAll('#chapterCustomPop .cOpt')].find(o => o.dataset.val === '13');
    opt13.click();
    ok(d.getElementById('chapter').value === '13', 'native select synced to 13');
    ok(d.getElementById('chapterCustomLabel').textContent.includes('Our Environment'), 'label shows Chapter 13');
    ok(!d.getElementById('chapterCustom').classList.contains('open'), 'popover closes after pick');

    // count chips
    const chip30 = [...d.querySelectorAll('.countChip')].find(c => c.dataset.count === '30');
    chip30.click();
    ok(d.getElementById('count').value === '30', 'count select synced to 30');
    ok(chip30.classList.contains('active'), 'count chip active state');

    // quiz still starts with custom values
    d.getElementById('startBtn').click();
    await sleep(300);
    ok(d.getElementById('quizScreen').style.display === 'block', 'quiz starts from custom setup');
    ok(d.getElementById('chapterTitle').textContent.includes('Chapter 13'), 'chapter-13 questions served');
    ok(d.getElementById('progress').textContent.includes('/ 30'), 'count 30 respected');
    w.close();

    // ---------- diagrams: mind-map parity ----------
    const d2 = await JSDOM.fromURL('http://localhost:3000/diagrams.html', {
        runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole: vc
    });
    const w2 = d2.window, dd = w2.document;
    await sleep(1000);
    ok(dd.querySelectorAll('.dgCardX').length === 13, '13 diagram chapter cards');
    ok(!dd.getElementById('openFullBtn'), 'no big Open Full Preview button');
    ok(!dd.querySelector('.dgCardX select') && !dd.getElementById('chapterSelect'), 'no select-based layout');
    dd.querySelectorAll('.dgCardX')[0].click();
    ok(dd.getElementById('dgViewer').classList.contains('open'), 'tap card opens fullscreen viewer');
    ok(dd.getElementById('dgViewerImg').src.includes('diagrams/Chapter1.png'), 'viewer uses real Chapter1.png');
    ok(!!dd.getElementById('dgZoomIn') && !!dd.getElementById('dgViewerBack'), 'zoom + back controls present');
    dd.getElementById('dgZoomIn').click();
    ok(dd.getElementById('dgViewerImg').style.transform.includes('scale(1.25'), 'zoom works');
    dd.getElementById('dgViewerBack').click();
    ok(!dd.getElementById('dgViewer').classList.contains('open'), 'back closes viewer');
    // search
    const sb = dd.getElementById('searchBox');
    sb.value = 'electricity';
    sb.dispatchEvent(new w2.Event('keyup'));
    const vis = [...dd.querySelectorAll('.dgCardX')].filter(c => c.style.display !== 'none');
    ok(vis.length === 1 && vis[0].textContent.includes('Electricity'), 'search filters diagram cards');
    w2.close();

    // ---------- notes: whole card = real link to real pdf ----------
    const d3 = await JSDOM.fromURL('http://localhost:3000/notes.html', {
        runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole: vc
    });
    const w3 = d3.window, d3d = w3.document;
    await sleep(900);
    const cards = d3d.querySelectorAll('.noteCard');
    ok(cards.length === 13 && [...cards].every(a => a.tagName === 'A' && a.getAttribute('target') === '_blank'),
        'all 13 note cards are accessible links opening in new tab');
    ok(cards[4].getAttribute('href') === 'notes/chapter5x.pdf', 'card 5 → real chapter5x.pdf');
    ok(!d3d.querySelector('.noteCard[onclick*="openPDF"]'), 'no obsolete openPDF button handlers left');
    w3.close();

    console.log('\nPASS: ' + pass + '  FAIL: ' + fail);
    process.exit(fail ? 1 : 0);
})().catch(e => { console.log('crashed:', e.message); process.exit(1); });
