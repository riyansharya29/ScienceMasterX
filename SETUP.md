# Science Master X — v4 UI/UX Fix Notes

- **Zig-zag / native-picker pattern removed** — the native `<select>` pickers in Quiz Setup
  (the source of the platform-rendered chevron/zig-zag backgrounds) are replaced by a
  custom Liquid-Glass chapter dropdown + segmented question-count chips. The native
  `#chapter` / `#count` selects remain hidden as the logic source, so the quiz engine,
  search shortcuts and full-syllabus button behave exactly as before.
- **Important Diagrams = Mind Maps experience** — same card radius/typography/spacing,
  13 tappable chapter cards with REAL `diagrams/ChapterN.png` thumbnails
  (`object-fit: contain`, never cropped), search, and tap-anywhere → fullscreen preview
  with zoom / 1:1 / back / close. The big "Open Full Preview" button is gone.
- **Notes cards** — whole card tap opens the real `notes/chapterNx.pdf` in a new tab;
  the small 🔍 still opens the in-app viewer (`viewer.html`) as fallback.
- **Press feedback** — subtle `scale(.98)` on tap for all cards/buttons; touch-friendly
  full-width controls; no tiny buttons.
- Search filters on all three library pages now use `textContent` (robust everywhere).

# (Earlier) v3 Fix & Complete Notes

## This round (v3)

- **Chapter 13 question bank added** — 68 NCERT/CBSE-aligned questions (MCQs, conceptual,
  10%-law numericals, Assertion-Reason, case-study/application; 20 flagged `pyq` for
  genuinely recurring board items). Same schema as chapters 1–12
  (`chapter, difficulty, pyq, question, options, answer, explanation`); chapters 1–12
  untouched; no duplicates; balanced answer positions.
- **Achievements v2 (functional)** — 9 achievements (First Step, Perfect Score,
  50 Questions, 3/7-Day Streak, Chapter Master, Science Explorer, Accuracy Pro,
  Science Master). Real conditions computed from existing localStorage data; persisted
  with unlock timestamps in `smxAchievements`; dedicated panel with Unlocked/Locked
  groups, per-achievement progress bars (x / y), unlock dates, subtle unlock animation,
  toast + sound on unlock.
- **Unified settings store** — single merged object `scienceMasterXSettings`
  `{ theme, custom{accent,accent2,bgStyle,cardAlpha,border,brightness}, soundEnabled,
  soundVolume, timerEnabled, aiMode }`. set() merges (never wipes); legacy keys mirrored
  (`soundEnabled`, `timerEnabled`, `smxVolume`, `smxTheme`, `smxThemeCustom`, `smxAiMode`)
  and migrated once. Quiz progress keys are never touched.
- **PDF opening fixed** — "Open Notes" now uses `window.open("notes/chapterNx.pdf","_blank")`
  (real uploaded PDFs, new tab, app preserved) **plus** an in-app fallback viewer
  `viewer.html?ch=N` with zoom, fullscreen, open-in-browser, download and back.
  All 13 PDFs verified HTTP 200. Mind map (`mindmaps/chapterN.png`) and diagram
  (`diagrams/ChapterN.png`) paths re-verified for all 13 chapters.
- Settings sheet: System icon 🖥️; every control verified working.

# (Earlier) v2 Upgrade Notes & Setup

## Your real assets are wired in ✅

| Asset | Location | Status |
|---|---|---|
| NCERT Notes PDFs | `notes/chapter1x.pdf … chapter13x.pdf` | **Your real PDFs** |
| Mind Map PNGs | `mindmaps/chapter1.png … chapter13.png` | **Your real mind maps** |
| Diagram PNGs | `diagrams/Chapter1.png … Chapter13.png` | **Your real diagrams** (capital C — `diagrams.js` updated) |
| Question bank | `questions.js` (1,270 Qs, ch 1–12, 132 PYQs) | **Your real bank** (legacy `"Acids, Bases and Salts"` chapter labels normalized to `2` at runtime — file untouched) |
| Certificate style | `css/certificate.css` | **Your gold certificate**, harmonised by the glass theme |
| Cert pipeline | `js/certificate.js`, `html2canvas.min.js`, `jspdf.min.js` | Referenced; keep yours. Print-to-PDF fallback if absent |

When merging into your existing project, keep your `data/`, `js/`, `css/`, `assets/` folders; both
`questions.js` (root) and `data/questions.js` are auto-detected.

## What v2 adds (on top of the v1 liquid-glass upgrade)

- **Themes** — ☀️ Light / 🌙 Dark /  System /  Custom (accent, background style, card
  transparency, border intensity, brightness). Saved in `smxTheme` + `smxThemeCustom`,
  applied instantly (no reload), no flash (`theme.js` runs in `<head>`), legacy `darkMode`
  key migrated.
- **Sound engine** — subtle synthesized WebAudio sounds (click, select, correct, wrong,
  complete, certificate, AI, achievement). Master mute = existing `soundEnabled` key,
  volume = `smxVolume`, autoplay-safe (context unlocks on first gesture).
- **Science AI v2** — 6 response modes (Explain / Numerical / Practice / Quick Revision /
  Exam / Chapter Revision), chapter context (URL `?chapter=N` or selector, saved as
  `smxAiChapter`), quick actions (Explain simply, Make short notes, 5 MCQs, Numerical,
  Test me, Revise), **📋 Copy + 🔄 Regenerate on every AI bubble**, stop generation,
  typewriter streaming, Assertion-Reason + Case-Study generators, exam marking-point
  format, spec error state (“Science AI is temporarily unavailable.” + Retry / Try Again).
- **Smart features** — ⭐ Daily Science Challenge (date-seeded), 🏆 Achievements
  (First Quiz, 10 Questions, Perfect Score, 5-Day Streak, Chapter Master) with unlock
  toasts + sound, 📊 strong/weak chapter analysis, 🎯 Weak Topic Practice from
  wrong-question data.
- **Settings v2** — Appearance / Sound (+volume) / Quiz / AI (default mode, clear chat
  history) / Study (separate resets for progress, bookmarks, wrong questions — all confirmed).
- **Mind Maps & Diagrams** — fullscreen viewer with **zoom (−/1:1/+)**, lazy loading,
  graceful missing-asset states.
- **Accessibility** — focus-visible outlines, ARIA labels, `prefers-reduced-motion` support.

## Preserved (unchanged behaviour & storage)

Quiz engine, timer, score, accuracy, high score, streak, bookmarks, wrong questions,
student name, certificate generation — and all original localStorage keys:
`studentName`, `highScore`, `attempt`, `correct`, `streak`, `lastOpen`, `bookmarks`,
`wrongQuestions`, `played`, `correctAns`, `timerEnabled`, `soundEnabled`, `darkMode`.
New keys (additive): `chapterStats`, `quizzesTaken`, `perfectScore`, `smxDaily`,
`smxAchievements`, `smxTheme`, `smxThemeCustom`, `smxVolume`, `smxAiMode`, `smxAiChapter`,
`smxAiChat`, `smxNotifSeen`.

## 🔐 Science AI backend (required for full AI)

The frontend **never** contains an API key. It posts
`{ message, mode, chapter, history }` to `POST /api/chat` and expects `{ reply }`.

```bash
npm install express
export OPENAI_API_KEY="sk-..."     # Windows: set OPENAI_API_KEY=sk-...
node server.js                     # → http://localhost:3000
```

- `server.js` applies the Science Master X system prompt **plus the selected mode's
  instructions** and chapter context; the key stays in the environment.
- Without a backend the chat uses the clearly-labelled **offline NCERT tutor**
  (`ai-local.js`) so students are never stuck.
- Remote backend: `localStorage.setItem("smxAiEndpoint", "https://your-server.com/api/chat")`

## QA (all verified in a real DOM + HTTP)

Home ✓ name ✓ quiz ✓ MCQs ✓ PYQs ✓ timer ✓ score ✓ accuracy ✓ high score ✓ streak ✓
bookmarks ✓ wrong questions ✓ notes ✓ mind maps ✓ diagrams ✓ formula sheet ✓ certificate ✓
AI ✓ loading ✓ error ✓ copy ✓ regenerate ✓ themes ✓ custom theme ✓ sound on/off ✓
mobile nav ✓ responsive ✓ localStorage ✓ no attendance/timetable/next-class/tasks ✓
no API key in frontend ✓
