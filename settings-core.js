/* ==========================================================
   SCIENCE MASTER X — UNIFIED SETTINGS STORE (settings-core.js)
   Single merged object in localStorage: scienceMasterXSettings
   {
     theme: "light" | "dark" | "system" | "custom",
     custom: { accent, accent2, bgStyle, cardAlpha, border, brightness },
     soundEnabled: bool,
     soundVolume: 0..1,
     timerEnabled: bool,
     aiMode: "explain" | ...
   }
   • set() MERGES patches — never wipes other values.
   • Mirrors legacy keys (soundEnabled, timerEnabled, smxVolume,
     smxTheme, smxThemeCustom, smxAiMode) so older readers keep
     working, and migrates them on first run.
   • Quiz progress keys (highScore, attempt, correct, streak,
     bookmarks, wrongQuestions, studentName, achievements…) are
     NEVER touched here.
   ========================================================== */
(function () {

    var KEY = "scienceMasterXSettings";

    function defaults() {
        return {
            theme: null,
            custom: {},
            soundEnabled: true,
            soundVolume: 0.5,
            timerEnabled: true,
            aiMode: "explain"
        };
    }

    function readAll() {
        var d = defaults();
        try {
            var raw = JSON.parse(localStorage.getItem(KEY) || "{}");
            for (var k in raw) {
                if (k === "custom") continue;
                if (k in d) d[k] = raw[k];
            }
            d.custom = Object.assign({}, raw.custom || {});
        } catch (e) { }
        return d;
    }

    // One-time migration from legacy individual keys
    if (localStorage.getItem(KEY) === null) {
        var d = defaults();
        var t = localStorage.getItem("smxTheme");
        if (!t) {
            if (localStorage.getItem("darkMode") === "true") t = "dark";
            else if (localStorage.getItem("darkMode") === "false") t = "light";
        }
        if (t) d.theme = t;
        try { d.custom = JSON.parse(localStorage.getItem("smxThemeCustom") || "{}"); } catch (e) { }
        var se = localStorage.getItem("soundEnabled");
        if (se !== null) d.soundEnabled = se !== "false";
        var sv = parseFloat(localStorage.getItem("smxVolume"));
        if (!isNaN(sv)) d.soundVolume = Math.min(1, Math.max(0, sv));
        var te = localStorage.getItem("timerEnabled");
        if (te !== null) d.timerEnabled = te !== "false";
        var am = localStorage.getItem("smxAiMode");
        if (am) d.aiMode = am;
        try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { }
    }

    function mirror(s) {
        try {
            localStorage.setItem("soundEnabled", s.soundEnabled ? "true" : "false");
            localStorage.setItem("timerEnabled", s.timerEnabled ? "true" : "false");
            localStorage.setItem("smxVolume", String(s.soundVolume));
            localStorage.setItem("smxAiMode", s.aiMode);
            if (s.theme) localStorage.setItem("smxTheme", s.theme);
            localStorage.setItem("smxThemeCustom", JSON.stringify(s.custom || {}));
        } catch (e) { }
    }

    window.smxStore = {
        key: KEY,
        get: readAll,
        getTheme: function () { return readAll().theme || "system"; },
        getCustom: function () { return readAll().custom; },
        set: function (patch) {
            var s = readAll();
            for (var k in patch) {
                if (k === "custom") s.custom = Object.assign({}, s.custom, patch.custom);
                else s[k] = patch[k];
            }
            try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { }
            mirror(s);
            return s;
        },
        setCustom: function (patch) {
            return window.smxStore.set({ custom: patch });
        }
    };
})();
