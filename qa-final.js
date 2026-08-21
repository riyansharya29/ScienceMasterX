/* Final QA — mirrors the user's 20-step checklist */
const { JSDOM, VirtualConsole } = require('jsdom');

const sleep = ms => new Promise(r => setTimeout(r, ms));
let pass = 0, fail = 0;
const ok = (cond, label) => { console.log((cond ? '✓' : '✗') + ' ' + label); cond ? pass++ : fail++; };

async function boot(url, seed, hooks) {
    const vc = new VirtualConsole();
    vc.on('jsdomError', () => { });
    vc.on('error', () => { });
    const dom = await JSDOM.fromURL(url, {
        runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole: vc,
        beforeParse(window) {
            if (seed) for (const [k, v] of Object.entries(seed)) window.localStorage.setItem(k, v);
            window.open = (u, t) => { window.__opened = (window.__opened || []).concat([u]); return null; };
            if (hooks) hooks(window);
        }
    });
    return dom;
}

(async () => {
    // ============ SESSION 1 ============
    const d1 = await boot('http://localhost:3000/index.html');
    const w = d1.window, d = w.document;
    await sleep(1500);

    // 1-4: chapter 13 quiz
    ok([...d.getElementById('chapter').options].some(o => o.value === '13'), '1. chapter select shows Chapter 13');
    d.getElementById('chapter').value = '13';
    d.getElementById('count').value = '10';
    d.getElementById('startBtn').click();
    await sleep(300);
    ok(d.getElementById('quizScreen').style.display === 'block', '2. chapter-13 quiz starts');
    ok(d.getElementById('chapterTitle').textContent.includes('Chapter 13'), '3. Chapter 13 questions load');
    ok(d.querySelectorAll('.option').length === 4, '4. four options rendered');

    // answer all 10 questions
    let guard = 0;
    while (d.getElementById('resultScreen').style.display !== 'block' && guard++ < 14) {
        const os = d.querySelectorAll('.option');
        if (os.length && !os[0].style.pointerEvents) { os[0].click(); d.getElementById('nextBtn').click(); }
        await sleep(1650);
    }
    ok(d.getElementById('resultScreen').style.display === 'block', '5. quiz completes → result screen');
    const attempt = Number(w.localStorage.getItem('attempt')) || 0;
    ok(attempt >= 10, '6. accuracy/attempt counters updated (' + attempt + ')');

    // 5-7: achievement unlocked + persists
    const ach = JSON.parse(w.localStorage.getItem('smxAchievements') || '{}');
    ok(!!ach.firstStep, '7. First Step achievement unlocked');
    ok(d.querySelectorAll('#achievementsPanel .achItem.unlocked').length >= 1, '8. unlocked card rendered');
    ok(d.querySelectorAll('#achievementsPanel .achItem.locked').length >= 1, '9. locked cards show progress');
    const locked = d.querySelector('#achievementsPanel .achItem.locked .aProg em');
    ok(!!locked && /\/ /.test(locked.textContent), '10. locked achievement shows progress (x / y)');

    // 8-12: themes
    d.querySelector('[data-theme-opt="dark"]').click();
    ok(d.documentElement.getAttribute('data-theme') === 'dark', '11. instant dark theme');
    d.querySelector('[data-theme-opt="custom"]').click();
    ok(d.documentElement.getAttribute('data-theme') === 'custom', '12. custom theme applies');
    ok(d.documentElement.style.getPropertyValue('--glass') !== '', '13. custom glass vars inline');
    // accent swatch change
    d.querySelectorAll('#accentSwatches .swatch')[1].click();
    ok(d.documentElement.style.getPropertyValue('--blue') !== '#2563EB', '14. accent color changes');
    d.querySelector('[data-theme-opt="dark"]').click();

    // 13-14: sound off persists
    const st = d.getElementById('soundToggle');
    st.checked = false; st.onchange();
    const store = JSON.parse(w.localStorage.getItem('scienceMasterXSettings'));
    ok(store.soundEnabled === false && w.localStorage.getItem('soundEnabled') === 'false', '15. sound OFF saved + mirrored');

    // notes: real pdf window.open
    const seed = {};
    for (const k of Object.keys(w.localStorage)) seed[k] = w.localStorage.getItem(k);
    w.close();

    // ============ SESSION 2 (refresh) ============
    let themeAtDCL = null;
    const d2 = await boot('http://localhost:3000/index.html', seed, (win) => {
        win.addEventListener('DOMContentLoaded', () => {
            themeAtDCL = win.document.documentElement.getAttribute('data-theme');
        });
    });
    const w2 = d2.window, dd = w2.document;
    await sleep(500); // let jsdom fire DOMContentLoaded (fromURL resolves earlier than DCL)
    ok(themeAtDCL === 'dark', '16. dark persists BEFORE paint after refresh (DOMContentLoaded)');
    await sleep(1200);
    const ach2 = JSON.parse(w2.localStorage.getItem('smxAchievements') || '{}');
    ok(!!ach2.firstStep, '17. achievement still unlocked after refresh');
    ok(!dd.getElementById('soundToggle').checked, '18. sound toggle still OFF after refresh');
    ok(dd.querySelector('[data-theme-opt="dark"]').classList.contains('active'), '19. theme UI reflects saved dark');

    // notes page: whole card = real accessible link to the real PDF
    const d3 = await boot('http://localhost:3000/notes.html', seed);
    const w3 = d3.window, d3d = w3.document;
    await sleep(900);
    const a1 = d3d.querySelectorAll('.noteCard')[0];
    const a13 = d3d.querySelectorAll('.noteCard')[12];
    ok(a1.tagName === 'A' && a1.getAttribute('href') === 'notes/chapter1x.pdf' && a1.getAttribute('target') === '_blank',
        '20. Notes Ch1 card is a real <a> to chapter1x.pdf (new tab)');
    ok(a13.tagName === 'A' && a13.getAttribute('href') === 'notes/chapter13x.pdf' && a13.getAttribute('target') === '_blank',
        '21. Notes Ch13 card is a real <a> to chapter13x.pdf (new tab)');
    ok(!!d3d.querySelector('.prevBtn'), '22. in-app PDF preview control present');

    // settings sheet opens & every control present
    w2.openSettings();
    ok(dd.getElementById('settingsModal').style.display === 'flex', '23. settings opens');
    ['volumeRange','aiModeSelect','clearAiHistoryBtn','resetBookmarksBtn','resetWrongBtn','cardAlphaRange','borderRange','brightnessRange','bgStyleSelect']
        .forEach(id => { if (!dd.getElementById(id)) ok(false, 'settings control ' + id); });
    ok(true, '24. all settings controls present');

    w2.close(); w3.close(); d2.window.close();
    console.log('\nPASS: ' + pass + '  FAIL: ' + fail);
    process.exit(fail ? 1 : 0);
})().catch(e => { console.log('QA crashed:', e.message); process.exit(1); });
