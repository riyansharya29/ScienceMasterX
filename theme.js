/* ==========================================================
   SCIENCE MASTER X — THEME ENGINE (theme.js)
   Light / Dark / System / Custom — instant, no reload.
   State lives in the unified store (settings-core.js):
     scienceMasterXSettings { theme, custom{…} }
   Legacy keys are migrated by settings-core and mirrored back,
   so old installs keep working.
   Runs in <head> → theme applied before first paint (no flash).
   ========================================================== */
(function () {

    var DEFAULT_CUSTOM = {
        accent: "#2563EB",
        accent2: "#06B6D4",
        bgStyle: "aurora",      // aurora | plain | mesh
        cardAlpha: 0.68,        // 0.4 – 0.95  (glass intensity)
        border: 0.12,           // 0.04 – 0.4  (border intensity)
        brightness: 1           // 0.75 – 1.1
    };

    function getStoredTheme() {
        if (window.smxStore) return window.smxStore.getTheme();
        // fallback if the store script is missing
        var t = localStorage.getItem("smxTheme");
        if (!t) {
            if (localStorage.getItem("darkMode") === "true") t = "dark";
            else if (localStorage.getItem("darkMode") === "false") t = "light";
            else t = "system";
        }
        return t;
    }

    function getCustom() {
        var c = {};
        for (var k in DEFAULT_CUSTOM) c[k] = DEFAULT_CUSTOM[k];
        var saved = window.smxStore ? window.smxStore.getCustom() : {};
        try {
            if (!saved || !Object.keys(saved).length) {
                saved = JSON.parse(localStorage.getItem("smxThemeCustom") || "{}");
            }
        } catch (e) { }
        for (var k2 in saved) if (k2 in DEFAULT_CUSTOM) c[k2] = saved[k2];
        return c;
    }

    function systemIsDark() {
        return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }

    function hexToRgb(hex) {
        var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || "");
        return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : [37, 99, 235];
    }

    function rgba(rgb, a) {
        return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
    }

    function apply() {
        var theme = getStoredTheme();
        var resolved = theme === "system" ? (systemIsDark() ? "dark" : "light") : theme;
        var root = document.documentElement;

        root.setAttribute("data-theme", resolved);

        if (resolved === "custom" || theme === "custom") {
            var c = getCustom();
            var a1 = hexToRgb(c.accent);
            var a2 = hexToRgb(c.accent2);
            var s = root.style;

            s.setProperty("--blue", c.accent);
            s.setProperty("--cyan", c.accent2);
            s.setProperty("--grad", "linear-gradient(135deg," + c.accent + " 0%," + c.accent2 + " 100%)");
            s.setProperty("--glass", "rgba(255,255,255," + c.cardAlpha + ")");
            s.setProperty("--glass-edge", rgba(a1, c.border));
            s.setProperty("--blue-glow", "0 10px 30px " + rgba(a1, 0.28));

            var L = Math.round(97 * Math.min(1.1, Math.max(0.75, c.brightness)));
            s.setProperty("--bg", "hsl(213 100% " + L + "%)");

            root.setAttribute("data-bgstyle", c.bgStyle || "aurora");
        } else {
            ["--blue", "--cyan", "--grad", "--glass", "--glass-edge", "--blue-glow", "--bg"]
                .forEach(function (p) { root.style.removeProperty(p); });
            root.setAttribute("data-bgstyle", "aurora");
        }
    }

    // React to OS theme changes while in System mode
    if (window.matchMedia) {
        try {
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
                if (getStoredTheme() === "system") apply();
            });
        } catch (e) { }
    }

    // Public API used by the Settings sheet
    window.smxTheme = {
        get: getStoredTheme,
        getCustom: getCustom,
        set: function (t) {
            if (window.smxStore) window.smxStore.set({ theme: t });
            else localStorage.setItem("smxTheme", t);
            apply();
        },
        setCustom: function (patch) {
            if (window.smxStore) window.smxStore.setCustom(patch);
            else {
                var c = getCustom();
                for (var k in patch) c[k] = patch[k];
                localStorage.setItem("smxThemeCustom", JSON.stringify(c));
                localStorage.setItem("smxTheme", "custom");
            }
            apply();
        },
        apply: apply
    };

    apply(); // runs in <head> → no flash of wrong theme
})();
