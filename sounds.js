/* ==========================================================
   SCIENCE MASTER X — PROFESSIONAL SOUND ENGINE (sounds.js)
   Subtle synthesized UI sounds via WebAudio (no big files).
   Settings read from the unified store:
     scienceMasterXSettings { soundEnabled, soundVolume }
   (mirrored to legacy `soundEnabled` / `smxVolume` keys).
   Autoplay-safe: AudioContext created/resumed only after the
   first real user gesture.
   ========================================================== */
(function () {

    var ctx = null;
    var master = null;
    var unlocked = false;

    function settings() {
        if (window.smxStore) {
            var s = window.smxStore.get();
            return { enabled: s.soundEnabled !== false, volume: Number(s.soundVolume) };
        }
        return {
            enabled: localStorage.getItem("soundEnabled") !== "false",
            volume: parseFloat(localStorage.getItem("smxVolume"))
        };
    }

    function getVolume() {
        var v = settings().volume;
        if (isNaN(v)) v = 0.5;
        return Math.min(1, Math.max(0, v));
    }

    function ensure() {
        if (!unlocked) return null;               // never play before interaction
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        if (!ctx) {
            try {
                ctx = new AC();
                master = ctx.createGain();
                master.gain.value = getVolume();
                master.connect(ctx.destination);
            } catch (e) { return null; }
        }
        if (ctx.state === "suspended") { ctx.resume().catch(function () { }); }
        return ctx;
    }

    // Unlock on the first genuine interaction (autoplay policy)
    ["pointerdown", "keydown"].forEach(function (ev) {
        window.addEventListener(ev, function () { unlocked = true; ensure(); }, { once: true, passive: true });
    });

    function enabled() { return settings().enabled; }

    /** Soft sine/triangle tone with a smooth envelope. */
    function tone(freq, dur, type, peak, delay, slideTo) {
        var c = ensure();
        if (!c) return;
        var t0 = c.currentTime + (delay || 0);
        var osc = c.createOscillator();
        var g = c.createGain();
        osc.type = type || "sine";
        osc.frequency.setValueAtTime(freq, t0);
        if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
        var p = peak * (0.25 + getVolume() * 0.9);   // master volume
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(Math.max(0.0002, p), t0 + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        osc.connect(g); g.connect(master);
        osc.start(t0); osc.stop(t0 + dur + 0.05);
    }

    var LIB = {
        click:       function () { tone(740, 0.05, "sine", 0.045); },
        select:      function () { tone(620, 0.06, "sine", 0.05, 0, 760); },
        correct:     function () { tone(659, 0.1, "sine", 0.055); tone(880, 0.14, "sine", 0.055, 0.09); },
        wrong:       function () { tone(220, 0.16, "sine", 0.05, 0, 180); },
        complete:    function () { [523, 659, 784].forEach(function (f, i) { tone(f, 0.14, "sine", 0.05, i * 0.11); }); },
        certificate: function () { [523, 659, 784, 1046].forEach(function (f, i) { tone(f, 0.16, "triangle", 0.05, i * 0.12); }); },
        ai:          function () { tone(880, 0.06, "sine", 0.04); tone(1174, 0.09, "sine", 0.04, 0.07); },
        achievement: function () { [784, 988, 1175, 1568].forEach(function (f, i) { tone(f, 0.12, "triangle", 0.05, i * 0.09); }); }
    };

    window.playSound = function (type) {
        if (!enabled()) return;                    // master mute — NO sound when OFF
        var f = LIB[type];
        if (f) f();
    };

    window.smxSetVolume = function (v) {
        if (window.smxStore) window.smxStore.set({ soundVolume: v });
        else localStorage.setItem("smxVolume", String(v));
        if (master) master.gain.value = getVolume();
    };
})();
