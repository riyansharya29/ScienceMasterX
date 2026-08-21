/* ==========================================
   SCIENCE MASTER X
   SCRIPT.JS — upgraded quiz engine
   All original logic preserved:
   timer • score • bookmarks • wrong questions •
   streak • high score • accuracy • analytics •
   sounds • certificate • settings
   + Quick Practice, PYQ mode, chapter progress,
     search, toasts (UI upgrade only)
==========================================*/

// =========================
// Global Variables
// =========================

let allQuestions = [];
let selectedQuestions = [];

let currentQuestion = 0;
let score = 0;

let selectedAnswer = null;

let timer = 0;
let timerInterval = null;

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
let wrongQuestions = JSON.parse(localStorage.getItem("wrongQuestions")) || [];

// Runtime normalization of legacy chapter labels (data file stays untouched)
if (typeof questions !== "undefined") {
    questions.forEach(q => {
        if (q && q.chapter === "Acids, Bases and Salts") q.chapter = "2";
    });
}

// =========================
// Chapter names (kept in sync with <select id="chapter">)
// =========================

const CHAPTER_NAMES = {
    "1": "Chemical Reactions and Equations",
    "2": "Acids, Bases and Salts",
    "3": "Metals and Non-metals",
    "4": "Carbon and its Compounds",
    "5": "Life Processes",
    "6": "Control and Coordination",
    "7": "How do Organisms Reproduce?",
    "8": "Heredity",
    "9": "Light – Reflection and Refraction",
    "10": "Human Eye and Colourful World",
    "11": "Electricity",
    "12": "Magnetic Effects of Electric Current",
    "13": "Our Environment"
};

// =========================
// Get Elements
// =========================

const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const chapterSelect = document.getElementById("chapter");
const countSelect = document.getElementById("count");

const progressBox = document.getElementById("progress");
const progressFill = document.getElementById("progressFill");

const timerBox = document.getElementById("timer");
const scoreBox = document.getElementById("score");

const chapterTitle = document.getElementById("chapterTitle");

const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionsBox");
const explanationBox = document.getElementById("explanationBox");

const highScoreBox = document.getElementById("highScore");
const bookmarkCount = document.getElementById("bookmarkCount");

const resultGrade = document.getElementById("resultGrade");
const resultEmoji = document.getElementById("resultEmoji");
const resultMessage = document.getElementById("resultMessage");

// =========================
// Toast (replaces alert — non-blocking)
// =========================

function smxToast(msg, type = "info", ms = 2200) {
    const box = document.getElementById("toastBox");
    if (!box) { alert(msg); return; }
    const t = document.createElement("div");
    t.className = "toast " + (type !== "info" ? type : "");
    t.textContent = msg;
    box.appendChild(t);
    setTimeout(() => {
        t.classList.add("out");
        setTimeout(() => t.remove(), 350);
    }, ms);
}
window.smxToast = smxToast;

// =========================
// Load Dashboard
// =========================

window.addEventListener("load", loadDashboard);
document.addEventListener("DOMContentLoaded", loadDashboard);

function loadDashboard() {

    let high = Number(localStorage.getItem("highScore")) || 0;
    if (highScoreBox) highScoreBox.innerHTML = high + "%";

    if (bookmarkCount) bookmarkCount.innerHTML = bookmarks.length;

    const totalAttempt = Number(localStorage.getItem("attempt")) || 0;
    const totalCorrect = Number(localStorage.getItem("correct")) || 0;
    const streak = Number(localStorage.getItem("streak")) || 0;

    const attemptedBox = document.getElementById("attemptedCount");
    const correctBox = document.getElementById("correctCount");
    const streakBox = document.getElementById("streakCount");
    const accuracyBox = document.getElementById("accuracy");
    const questionCountBox = document.getElementById("questionCount");

    if (attemptedBox) attemptedBox.textContent = totalAttempt;
    if (correctBox) correctBox.textContent = totalCorrect;
    if (streakBox) streakBox.textContent = streak;

    const accuracy = totalAttempt ? Math.round((totalCorrect / totalAttempt) * 100) : 0;
    if (accuracyBox) accuracyBox.textContent = accuracy + "%";

    if (questionCountBox && typeof questions !== "undefined") {
        questionCountBox.textContent = questions.length + "+";
    }

    // Hero greeting (uses saved studentName)
    updateGreeting();

    // Hero chips
    const heroStreak = document.getElementById("heroStreak");
    const heroAccuracy = document.getElementById("heroAccuracy");
    if (heroStreak) heroStreak.textContent = streak;
    if (heroAccuracy) heroAccuracy.textContent = accuracy + "%";

    // Overall progress ring + chapter-wise bars
    renderOverallRing(accuracy);
    renderChapterProgress();

    const savedName = localStorage.getItem("studentName");
    const nameInput = document.getElementById("studentName");
    if (nameInput && savedName && savedName !== "CBSE Student") {
        nameInput.value = savedName;
    }
}

function updateGreeting() {
    const el = document.getElementById("heroGreeting");
    if (!el) return;
    const name = localStorage.getItem("studentName");
    el.textContent = "Hello, " + (name && name !== "CBSE Student" ? name : "Student") + "! 👋";
}

function renderOverallRing(accuracy) {
    const ring = document.getElementById("overallRing");
    const text = document.getElementById("overallProgressText");
    if (text) text.textContent = accuracy + "%";
    if (ring) {
        const circumference = 2 * Math.PI * 52; // r=52
        requestAnimationFrame(() => {
            ring.style.strokeDashoffset = circumference * (1 - accuracy / 100);
        });
    }
}

// --------------------------
// Chapter-wise progress
// (existing localStorage keys untouched; new key: chapterStats)
// --------------------------

function getChapterStats() {
    try { return JSON.parse(localStorage.getItem("chapterStats")) || {}; }
    catch (e) { return {}; }
}

function renderChapterProgress() {
    const list = document.getElementById("chapterProgressList");
    if (!list) return;
    const stats = getChapterStats();
    let html = "";
    for (let c = 1; c <= 13; c++) {
        const s = stats[c];
        const name = CHAPTER_NAMES[c] || ("Chapter " + c);
        if (s && s.attempt > 0) {
            const pct = Math.round((s.correct / s.attempt) * 100);
            html += `
            <div class="chpRow">
                <div class="chpHead"><b>Ch ${c} · ${name}</b><small>${s.correct}/${s.attempt} · ${pct}%</small></div>
                <div class="chpBar"><div class="chpFill" style="width:${pct}%"></div></div>
            </div>`;
        } else {
            html += `
            <div class="chpRow">
                <div class="chpHead"><b>Ch ${c} · ${name}</b><small class="chpEmpty">Not attempted yet</small></div>
                <div class="chpBar"><div class="chpFill" style="width:0%"></div></div>
            </div>`;
        }
    }
    list.innerHTML = html;
}

// =========================
// Start Quiz
// =========================

startBtn.addEventListener("click", startQuiz);

function startQuiz() {

    currentQuestion = 0;
    score = 0;
    timer = 0;
    selectedAnswer = null;

    const nameInput = document.getElementById("studentName");
    localStorage.setItem(
        "studentName",
        (nameInput && nameInput.value.trim()) || localStorage.getItem("studentName") || "CBSE Student"
    );
    updateGreeting();

    homeScreen.style.display = "none";
    resultScreen.style.display = "none";
    quizScreen.style.display = "block";

    prepareQuestions();

    // prepareQuestions may abort (no questions) and restore home
    if (quizScreen.style.display === "none") return;

    startTimer();
    showQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================
// Prepare Questions
// =========================

function prepareQuestions() {

    let chapter = chapterSelect.value;
    let total = quizMode === "quick" ? 5 : Number(countSelect.value);

    if (quizMode === "bookmark") {

        allQuestions = [...bookmarks];

    } else if (quizMode === "wrong") {

        allQuestions = [...wrongQuestions];

    } else if (quizMode === "full" || quizMode === "quick") {

        allQuestions = [...questions];

    } else if (quizMode === "pyq") {

        allQuestions = questions.filter(q => q && q.pyq === true);

    } else {

        if (chapter === "all") {

            allQuestions = [...questions];

        } else {

            allQuestions = questions.filter(q => q && q.chapter == chapter);

        }

    }

    // defensive: drop any empty entries
    allQuestions = allQuestions.filter(q => q && q.question);

    shuffle(allQuestions);

    selectedQuestions = allQuestions.slice(0, total);

    if (selectedQuestions.length === 0) {

        smxToast("No Questions Available", "error");

        quizScreen.style.display = "none";
        homeScreen.style.display = "block";

        return;
    }
}

// =========================
// Shuffle
// =========================

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
}

// =========================
// Timer
// =========================

function startTimer() {

    if (localStorage.getItem("timerEnabled") == "false") return;

    clearInterval(timerInterval);

    timerBox.innerHTML = "⏱ 00:00";

    timerInterval = setInterval(function () {

        timer++;

        let min = Math.floor(timer / 60);
        let sec = timer % 60;

        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;

        timerBox.innerHTML = "⏱ " + min + ":" + sec;

    }, 1000);
}

// =========================
// Show Question
// =========================

function showQuestion() {

    selectedAnswer = null;

    explanationBox.style.display = "none";
    explanationBox.innerHTML = "";

    let q = selectedQuestions[currentQuestion];

    if (!q) {
        finishQuiz();
        return;
    }

    progressBox.innerHTML =
        "Question " + (currentQuestion + 1) + " / " + selectedQuestions.length;

    scoreBox.innerHTML = "Score : " + score;

    let progress = ((currentQuestion + 1) / selectedQuestions.length) * 100;
    progressFill.style.width = progress + "%";

    chapterTitle.innerHTML = "Chapter " + q.chapter +
        (CHAPTER_NAMES[q.chapter] ? " · " + CHAPTER_NAMES[q.chapter] : "") +
        (q.pyq ? " · PYQ" : "");

    questionBox.innerHTML = q.question;

    optionsBox.innerHTML = "";

    q.options.forEach(function (option, index) {

        let div = document.createElement("div");
        div.className = "option";
        div.innerHTML = "<b>" + String.fromCharCode(65 + index) + ".</b> " + option;

        div.onclick = function () {
            document.querySelectorAll(".option").forEach(function (x) {
                x.classList.remove("selected");
            });
            div.classList.add("selected");
            selectedAnswer = index;
            playSound("select");
        };

        optionsBox.appendChild(div);
    });

    // Refresh bookmark button state
    updateBookmarkBtn(q);
}

function updateBookmarkBtn(q) {
    const isMarked = bookmarks.findIndex(item => item.question === (q && q.question)) !== -1;
    bookmarkBtn.innerHTML = isMarked ? "⭐ Bookmarked" : "⭐ Bookmark";
}

// =========================
// Next Button
// =========================

nextBtn.addEventListener("click", nextQuestion);

function nextQuestion() {

    if (selectedAnswer === null) {
        smxToast("Please select an option.", "error");
        return;
    }

    checkAnswer();
}

// =========================
// Check Answer
// =========================

function checkAnswer() {

    let q = selectedQuestions[currentQuestion];

    let optionList = document.querySelectorAll(".option");

    optionList.forEach(function (option, index) {

        option.style.pointerEvents = "none";

        if (index === q.answer) option.classList.add("correct");

        if (index === selectedAnswer && selectedAnswer !== q.answer) {
            option.classList.add("wrong");
        }
    });

    if (selectedAnswer === q.answer) {

        score++;
        playSound("correct");
        saveAnalytics(true);

    } else {

        saveWrongQuestion();
        playSound("wrong");
        saveAnalytics(false);
    }

    scoreBox.innerHTML = "Score : " + score;
    saveProgress();

    // Explanation
    if (q.explanation) {
        explanationBox.style.display = "block";
        explanationBox.innerHTML = "<b>Explanation :</b><br><br>" + q.explanation;
    }

    nextBtn.disabled = true;

    setTimeout(function () {

        nextBtn.disabled = false;
        currentQuestion++;

        if (currentQuestion >= selectedQuestions.length) {
            finishQuiz();
        } else {
            showQuestion();
        }

    }, 1500);
}

// =========================
// Finish Quiz
// =========================

function finishQuiz() {

    const percentage = Math.round((score / selectedQuestions.length) * 100);
    const wrong = selectedQuestions.length - score;

    clearInterval(timerInterval);

    quizScreen.style.display = "none";
    resultScreen.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });

    // High Score Save (existing key: highScore)
    let oldHigh = Number(localStorage.getItem("highScore")) || 0;
    if (percentage > oldHigh) {
        localStorage.setItem("highScore", percentage);
    }

    // Quiz counters for the achievement system
    const quizzesTaken = Number(localStorage.getItem("quizzesTaken")) || 0;
    localStorage.setItem("quizzesTaken", quizzesTaken + 1);
    if (percentage === 100) localStorage.setItem("perfectScore", "1");

    playSound("complete");

    // Result card
    document.getElementById("percentageText").textContent = percentage + "%";
    document.getElementById("correctResult").textContent = score;
    document.getElementById("wrongResult").textContent = wrong;
    document.getElementById("timeResult").textContent = timerBox.textContent;

    document.getElementById("resultScore").textContent = score + " / " + selectedQuestions.length;
    document.getElementById("resultPercentage").textContent = percentage + "%";
    document.getElementById("resultTime").textContent = timerBox.textContent;

    let grade;
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 40) grade = "D";
    else grade = "F";

    resultGrade.innerHTML = grade;

    if (percentage >= 90) {
        resultEmoji.innerHTML = "🏆";
        resultMessage.innerHTML = "Outstanding! You are ready for your CBSE Board Exam.";
    }
    else if (percentage >= 75) {
        resultEmoji.innerHTML = "🥇";
        resultMessage.innerHTML = "Excellent Performance!";
    }
    else if (percentage >= 60) {
        resultEmoji.innerHTML = "👍";
        resultMessage.innerHTML = "Good Job! Keep Practicing.";
    }
    else {
        resultEmoji.innerHTML = "📚";
        resultMessage.innerHTML = "Practice More to Improve.";
    }

    loadDashboard();
    evaluateAchievements(true);
}

// =========================
// Restart Quiz
// =========================

const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", function () {
    resultScreen.style.display = "none";
    startQuiz();
});

// =========================
// Home Button
// =========================

const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", function () {

    clearInterval(timerInterval);

    resultScreen.style.display = "none";
    quizScreen.style.display = "none";
    homeScreen.style.display = "block";

    loadDashboard();
});

// =========================
// Keyboard Support
// (now ignored while typing in inputs)
// =========================

document.addEventListener("keydown", function (e) {

    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

    if (quizScreen.style.display === "none") return;

    if (e.key === "1") document.querySelectorAll(".option")[0]?.click();
    if (e.key === "2") document.querySelectorAll(".option")[1]?.click();
    if (e.key === "3") document.querySelectorAll(".option")[2]?.click();
    if (e.key === "4") document.querySelectorAll(".option")[3]?.click();
    if (e.key === "Enter") nextBtn.click();
});

// ==========================================
// Bookmarks + Wrong Questions + Accuracy
// ==========================================

const bookmarkBtn = document.getElementById("bookmarkBtn");

bookmarkBtn.addEventListener("click", toggleBookmark);

function toggleBookmark() {

    let q = selectedQuestions[currentQuestion];
    if (!q) return;

    let index = bookmarks.findIndex(item => item.question === q.question);

    if (index === -1) {
        bookmarks.push(q);
        smxToast("⭐ Question Bookmarked", "success");
    } else {
        bookmarks.splice(index, 1);
        smxToast("Bookmark Removed");
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    updateBookmarkBtn(q);
    updateDashboard();
}

// --------------------------
// Save Wrong Questions
// --------------------------

function saveWrongQuestion() {

    let q = selectedQuestions[currentQuestion];

    let exists = wrongQuestions.find(item => item.question === q.question);

    if (!exists) {
        wrongQuestions.push(q);
        localStorage.setItem("wrongQuestions", JSON.stringify(wrongQuestions));
    }
}

// --------------------------
// Dashboard Update
// --------------------------

function updateDashboard() {

    bookmarkCount.innerHTML = bookmarks.length;

    let high = Number(localStorage.getItem("highScore")) || 0;
    highScoreBox.innerHTML = high + "%";

    let totalAttempt = Number(localStorage.getItem("attempt")) || 0;
    let totalCorrect = Number(localStorage.getItem("correct")) || 0;

    let accuracy = 0;
    if (totalAttempt > 0) {
        accuracy = Math.round((totalCorrect / totalAttempt) * 100);
    }

    let accuracyBox = document.getElementById("accuracy");
    if (accuracyBox) accuracyBox.innerHTML = accuracy + "%";
}

// --------------------------
// Save Progress (existing keys: attempt, correct)
// + chapter-wise tracking (new key: chapterStats)
// --------------------------

function saveProgress() {

    let attempt = Number(localStorage.getItem("attempt")) || 0;
    let correct = Number(localStorage.getItem("correct")) || 0;

    attempt++;

    const isCorrect = selectedAnswer === selectedQuestions[currentQuestion].answer;

    if (isCorrect) correct++;

    localStorage.setItem("attempt", attempt);
    localStorage.setItem("correct", correct);

    // Chapter-wise stats (additive only — never touches old keys)
    const q = selectedQuestions[currentQuestion];
    if (q && q.chapter) {
        const stats = getChapterStats();
        if (!stats[q.chapter]) stats[q.chapter] = { attempt: 0, correct: 0 };
        stats[q.chapter].attempt++;
        if (isCorrect) stats[q.chapter].correct++;
        localStorage.setItem("chapterStats", JSON.stringify(stats));
    }
}

// ==========================================
// Quiz Modes (existing 4 + PYQ + Quick Practice)
// ==========================================

let quizMode = "chapter";

const chapterQuizBtn = document.getElementById("chapterQuizBtn");
const fullQuizBtn = document.getElementById("fullQuizBtn");
const pyqQuizBtn = document.getElementById("pyqQuizBtn");
const bookmarkQuizBtn = document.getElementById("bookmarkQuizBtn");
const wrongQuizBtn = document.getElementById("wrongQuizBtn");

function setQuizMode(mode, label, icon) {
    quizMode = mode;
    [chapterQuizBtn, fullQuizBtn, pyqQuizBtn, bookmarkQuizBtn, wrongQuizBtn].forEach(b => {
        if (b) b.classList.remove("active");
    });
    const map = { chapter: chapterQuizBtn, full: fullQuizBtn, pyq: pyqQuizBtn, bookmark: bookmarkQuizBtn, wrong: wrongQuizBtn };
    if (map[mode]) map[mode].classList.add("active");
    smxToast(icon + " " + label + " Selected");
}

chapterQuizBtn.onclick = function () { setQuizMode("chapter", "Chapter Quiz", "📖"); };

fullQuizBtn.onclick = function () {
    chapterSelect.value = "all";
    if (window.smxSyncQuizSetupUI) window.smxSyncQuizSetupUI();
    setQuizMode("full", "Full Syllabus", "🎯");
};

pyqQuizBtn.onclick = function () { setQuizMode("pyq", "PYQ Practice", "📋"); };

bookmarkQuizBtn.onclick = function () { setQuizMode("bookmark", "Bookmark Quiz", "⭐"); };

wrongQuizBtn.onclick = function () { setQuizMode("wrong", "Wrong Questions", "❌"); };

// Quick Practice — 5 random questions, starts instantly
const quickPracticeBtn = document.getElementById("quickPracticeBtn");
if (quickPracticeBtn) {
    quickPracticeBtn.onclick = function () {
        quizMode = "quick";
        smxToast("⚡ Quick Practice — 5 questions");
        startQuiz();
    };
}

// "Quiz" card scrolls to the quiz setup panel
const openQuizSetupBtn = document.getElementById("openQuizSetupBtn");
if (openQuizSetupBtn) {
    openQuizSetupBtn.onclick = function () {
        const setup = document.getElementById("quizSetup");
        if (setup) {
            setup.scrollIntoView({ behavior: "smooth", block: "center" });
            setup.style.boxShadow = "0 0 0 3px rgba(37,99,235,.35), var(--shadow-lg)";
            setTimeout(() => { setup.style.boxShadow = ""; }, 1300);
        }
    };
}

// ==========================================
// Settings
// ==========================================

const settingsModal = document.getElementById("settingsModal");
const closeSettings = document.getElementById("closeSettings");
const timerToggle = document.getElementById("timerToggle");
const soundToggle = document.getElementById("soundToggle");
const darkModeToggle = document.getElementById("darkModeToggle"); // may not exist anymore — guarded
const settingsStudentName = document.getElementById("settingsStudentName");

loadSettings();
refreshSettingsProfile();

function refreshSettingsProfile() {
    if (settingsStudentName) {
        settingsStudentName.textContent = localStorage.getItem("studentName") || "CBSE Student";
    }
}

function loadSettings() {

    const s = window.smxStore ? window.smxStore.get() : {
        timerEnabled: JSON.parse(localStorage.getItem("timerEnabled")),
        soundEnabled: JSON.parse(localStorage.getItem("soundEnabled"))
    };

    let timerEnabled = s.timerEnabled;
    let sound = s.soundEnabled;

    if (timerEnabled === null || timerEnabled === undefined) timerEnabled = true;
    if (sound === null || sound === undefined) sound = true;

    if (timerToggle) timerToggle.checked = timerEnabled;
    if (soundToggle) soundToggle.checked = sound;
    if (darkModeToggle) darkModeToggle.checked = false;
}

if (timerToggle) {
    timerToggle.onchange = function () {
        if (window.smxStore) window.smxStore.set({ timerEnabled: timerToggle.checked });
        else localStorage.setItem("timerEnabled", timerToggle.checked);
    };
}

if (soundToggle) {
    soundToggle.onchange = function () {
        if (window.smxStore) window.smxStore.set({ soundEnabled: soundToggle.checked });
        else localStorage.setItem("soundEnabled", soundToggle.checked);
        if (soundToggle.checked) playSound("click");   // audible confirmation when re-enabled
    };
}

function openSettings() {
    refreshSettingsProfile();
    if (settingsModal) {
        settingsModal.style.display = "flex";
        document.body.classList.add("settings-open");
        syncThemeUI();
    }
}

function closeSettingsPanel() {
    if (settingsModal) settingsModal.style.display = "none";
    document.body.classList.remove("settings-open");
}

window.openSettings = openSettings;
window.closeSettingsPanel = closeSettingsPanel;

window.editStudentName = function () {
    const old = localStorage.getItem("studentName") || "";
    const n = prompt("Enter your name:", old);
    if (n === null) return;
    const name = n.trim();
    if (!name) return;
    localStorage.setItem("studentName", name);
    if (settingsStudentName) settingsStudentName.textContent = name;
    const input = document.getElementById("studentName");
    if (input) input.value = name;
    updateGreeting();
};

if (closeSettings) closeSettings.onclick = closeSettingsPanel;
if (settingsModal) {
    settingsModal.addEventListener("click", function (e) {
        if (e.target === settingsModal) closeSettingsPanel();
    });
}

const settingsBtn = document.getElementById("settingsBtn");
if (settingsBtn) settingsBtn.onclick = openSettings;

const settingsEditBtn = document.getElementById("settingsEditBtn");
if (settingsEditBtn) settingsEditBtn.onclick = window.editStudentName;

const resetProgressBtn = document.getElementById("resetProgressBtn");
if (resetProgressBtn) {
    resetProgressBtn.onclick = function () {
        if (!confirm("Reset all Science Master X progress? This cannot be undone.")) return;
        ["highScore", "attempt", "correct", "streak", "lastOpen", "played", "correctAns",
            "studentName", "timerEnabled", "soundEnabled", "darkMode", "chapterStats",
            "quizzesTaken", "perfectScore", "smxDaily", "smxAchievements"]
            .forEach(k => localStorage.removeItem(k));
        localStorage.removeItem("bookmarks");
        localStorage.removeItem("wrongQuestions");
        bookmarks = [];
        wrongQuestions = [];
        refreshSettingsProfile();
        loadDashboard();
        loadSettings();
        smxToast("Progress reset successfully.", "success");
    };
}

// ==========================================
// Sounds — provided by sounds.js (WebAudio,
// subtle, synthesized, autoplay-safe).
// playSound(type) is a global from sounds.js.
// ==========================================
if (typeof window.playSound !== "function") {
    window.playSound = function () { };
}

// ---------- Analytics (existing keys: played, correctAns) ----------

function saveAnalytics(correct) {

    let played = Number(localStorage.getItem("played")) || 0;
    let correctAns = Number(localStorage.getItem("correctAns")) || 0;

    played++;
    if (correct) correctAns++;

    localStorage.setItem("played", played);
    localStorage.setItem("correctAns", correctAns);
}

// ---------- Daily Streak (existing keys: streak, lastOpen) ----------

function updateStreak() {

    let today = new Date().toDateString();
    let last = localStorage.getItem("lastOpen");
    let streak = Number(localStorage.getItem("streak")) || 0;

    if (last != today) {
        streak++;
        localStorage.setItem("streak", streak);
        localStorage.setItem("lastOpen", today);
    }
}

updateStreak();

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => playSound("click"));
});

// ==========================================
// Share Result
// ==========================================

const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {

    const percentage = Math.round((score / selectedQuestions.length) * 100);

    const text =
        `🏆 Science Master X\n\nScore : ${score}/${selectedQuestions.length}\n\nPercentage : ${percentage}%\n\nTime : ${timerBox.textContent}`;

    if (navigator.share) {
        try {
            await navigator.share({ title: "Science Master X", text: text });
        } catch (e) { /* user dismissed share sheet */ }
    } else {
        try {
            await navigator.clipboard.writeText(text);
            smxToast("Result copied to clipboard!", "success");
        } catch (e) {
            smxToast("Could not copy result", "error");
        }
    }
});

/* ==========================================
   CERTIFICATE SYSTEM
   (top-level — previously mis-nested inside
   the share handler, now correctly wired)
========================================== */

const viewCertificate = document.getElementById("viewCertificate");
const certificateModal = document.getElementById("certificateModal");
const closeCertificate = document.querySelector(".closeCertificate");

function openCertificate() {

    if (!selectedQuestions.length) {
        smxToast("Finish a quiz first to earn your certificate 🏆", "error", 2800);
        return;
    }

    let percentage = Math.round((score / selectedQuestions.length) * 100);

    document.getElementById("certificateStudentName").innerHTML =
        localStorage.getItem("studentName") || "CBSE Student";

    document.getElementById("certificateChapter").innerHTML =
        chapterSelect.options[chapterSelect.selectedIndex].text;

    document.getElementById("certificateScore").innerHTML =
        score + " / " + selectedQuestions.length;

    document.getElementById("certificatePercentage").innerHTML =
        percentage + "%";

    let grade = "C";
    if (percentage >= 95) grade = "A+";
    else if (percentage >= 90) grade = "A";
    else if (percentage >= 80) grade = "B+";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else grade = "Needs Improvement";

    document.getElementById("certificateGrade").innerHTML = grade;
    document.getElementById("certificateDate").innerHTML = new Date().toLocaleDateString();
    document.getElementById("certificateId").innerHTML = "SMX-" + Date.now();

    certificateModal.style.display = "flex";
    playSound("certificate");
}

if (viewCertificate) viewCertificate.onclick = openCertificate;

// Home-screen Achievements card also opens the certificate
const viewCertificateHome = document.getElementById("viewCertificateHome");
if (viewCertificateHome) viewCertificateHome.onclick = openCertificate;

if (closeCertificate) {
    closeCertificate.onclick = function () {
        certificateModal.style.display = "none";
    };
}

window.addEventListener("click", function (e) {
    if (certificateModal && e.target == certificateModal) {
        certificateModal.style.display = "none";
    }
});

// Certificate PDF download fallback:
// if js/certificate.js + html2canvas/jspdf exist, they handle it.
// Otherwise we offer the browser's print-to-PDF.
document.querySelectorAll(".downloadCertificate").forEach(btn => {
    btn.addEventListener("click", function () {
        const libsMissing = typeof window.jspdf === "undefined" &&
            typeof window.html2canvas === "undefined" &&
            typeof window.jsPDF === "undefined";
        if (libsMissing) {
            smxToast("Opening print view — choose “Save as PDF”", "info", 3000);
            setTimeout(() => window.print(), 600);
        }
    });
});

// ==========================================
// Header: Search + Notifications
// ==========================================

const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const SEARCH_INDEX = [
    { icon: "📚", title: "NCERT Notes", sub: "Study Resources", action: () => location.href = "notes.html" },
    { icon: "🧠", title: "Mind Maps", sub: "Study Resources", action: () => location.href = "mindmaps.html" },
    { icon: "🧪", title: "Important Diagrams", sub: "Study Resources", action: () => location.href = "diagrams.html" },
    { icon: "📄", title: "Formula Sheet", sub: "Study Resources", action: () => location.href = "formulas.html" },
    { icon: "🤖", title: "Science AI", sub: "Ask anything about Class 10 Science", action: () => location.href = "ai.html" },
    { icon: "📝", title: "Quiz", sub: "Chapter-wise MCQs & PYQs", action: () => document.getElementById("openQuizSetupBtn")?.click() },
    { icon: "⚡", title: "Quick Practice", sub: "5-question rapid revision", action: () => quickPracticeBtn?.click() },
    { icon: "🏆", title: "Certificates / Achievements", sub: "View your certificate", action: () => openCertificate() },
    { icon: "📊", title: "Progress", sub: "Accuracy, streak & chapter stats", action: () => document.getElementById("progressSection")?.scrollIntoView({ behavior: "smooth" }) }
];

for (let c = 1; c <= 13; c++) {
    SEARCH_INDEX.push({
        icon: "📖",
        title: "Chapter " + c + " · " + (CHAPTER_NAMES[c] || ""),
        sub: "Start chapter quiz",
        action: (ch => () => {
            chapterSelect.value = String(ch);
            if (window.smxSyncQuizSetupUI) window.smxSyncQuizSetupUI();
            setQuizMode("chapter", "Chapter Quiz", "📖");
            document.getElementById("quizSetup")?.scrollIntoView({ behavior: "smooth", block: "center" });
        })(c)
    });
}

function renderSearch(filter = "") {
    if (!searchResults) return;
    const f = filter.trim().toLowerCase();
    const hits = SEARCH_INDEX.filter(item =>
        !f || item.title.toLowerCase().includes(f) || item.sub.toLowerCase().includes(f)
    ).slice(0, 12);

    if (!hits.length) {
        searchResults.innerHTML = '<div class="searchEmpty">No results for “' + filter + '”</div>';
        return;
    }

    searchResults.innerHTML = "";
    hits.forEach(item => {
        const btn = document.createElement("button");
        btn.className = "searchResult";
        btn.type = "button";
        btn.innerHTML = '<span class="srIcon">' + item.icon + '</span><span><strong>' +
            item.title + '</strong><small>' + item.sub + '</small></span>';
        btn.onclick = () => { closeSearch(); item.action(); };
        searchResults.appendChild(btn);
    });
}

function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add("open");
    renderSearch("");
    setTimeout(() => searchInput && searchInput.focus(), 60);
}
function closeSearch() {
    if (searchOverlay) searchOverlay.classList.remove("open");
    if (searchInput) searchInput.value = "";
}

if (searchBtn) searchBtn.onclick = openSearch;
if (searchOverlay) {
    searchOverlay.addEventListener("click", e => {
        if (e.target === searchOverlay) closeSearch();
    });
}
if (searchInput) {
    searchInput.addEventListener("input", () => renderSearch(searchInput.value));
    searchInput.addEventListener("keydown", e => {
        if (e.key === "Escape") closeSearch();
        if (e.key === "Enter") {
            const first = searchResults.querySelector(".searchResult");
            if (first) first.click();
        }
    });
}

const notifBtn = document.getElementById("notifBtn");
const notifPop = document.getElementById("notifPop");
const notifDot = document.getElementById("notifDot");

if (notifDot && localStorage.getItem("smxNotifSeen")) notifDot.style.display = "none";

if (notifBtn && notifPop) {
    notifBtn.onclick = function (e) {
        e.stopPropagation();
        notifPop.classList.toggle("open");
        if (notifPop.classList.contains("open")) {
            localStorage.setItem("smxNotifSeen", "1");
            if (notifDot) notifDot.style.display = "none";
        }
    };
    document.addEventListener("click", function (e) {
        if (!notifPop.contains(e.target) && e.target !== notifBtn) {
            notifPop.classList.remove("open");
        }
    });
}

// ==========================================
// Bottom navigation
// ==========================================

const navStudyBtn = document.getElementById("navStudyBtn");
const navQuizBtn = document.getElementById("navQuizBtn");
const navProfileBtn = document.getElementById("navProfileBtn");

if (navStudyBtn) {
    navStudyBtn.onclick = function () {
        // From quiz/result screens, go back home first
        if (homeScreen.style.display === "none") {
            clearInterval(timerInterval);
            quizScreen.style.display = "none";
            resultScreen.style.display = "none";
            homeScreen.style.display = "block";
            loadDashboard();
        }
        document.getElementById("studySection")?.scrollIntoView({ behavior: "smooth" });
    };
}

if (navQuizBtn) {
    navQuizBtn.onclick = function () {
        if (homeScreen.style.display === "none") {
            clearInterval(timerInterval);
            quizScreen.style.display = "none";
            resultScreen.style.display = "none";
            homeScreen.style.display = "block";
            loadDashboard();
        }
        startQuiz();
    };
}

if (navProfileBtn) navProfileBtn.onclick = openSettings;

// Keep greeting in sync if the name changes in another tab
window.addEventListener("storage", function () {
    updateGreeting();
    refreshSettingsProfile();
});

// ==========================================
// SMART FEATURES
// Daily Challenge • Achievements • Chapter Performance
// ==========================================

// ---------- Daily Science Challenge ----------

function initDailyChallenge() {
    if (typeof questions === "undefined") return;
    const dateEl = document.getElementById("dailyDate");
    const qEl = document.getElementById("dailyQuestion");
    const optBox = document.getElementById("dailyOptions");
    const doneEl = document.getElementById("dailyDone");
    const hintEl = document.getElementById("dailyHint");
    if (!qEl || !optBox) return;

    const today = new Date();
    const dayKey = today.toDateString();
    if (dateEl) dateEl.textContent = today.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" });

    const pool = questions.filter(q => q && q.question && q.options && q.options.length === 4);
    if (!pool.length) return;

    // deterministic pick for the day
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const q = pool[seed % pool.length];

    let saved = {};
    try { saved = JSON.parse(localStorage.getItem("smxDaily")) || {}; } catch (e) { }
    const doneToday = saved.date === dayKey;

    qEl.textContent = q.question;
    optBox.innerHTML = "";

    q.options.forEach((opt, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "dailyOpt";
        b.textContent = String.fromCharCode(65 + i) + ". " + opt;
        if (doneToday) {
            b.disabled = true;
            if (i === q.answer) b.classList.add("correct");
            if (saved.pick === i && i !== q.answer) b.classList.add("wrong");
        } else {
            b.onclick = () => {
                playSound(i === q.answer ? "correct" : "wrong");
                localStorage.setItem("smxDaily", JSON.stringify({ date: dayKey, pick: i, ok: i === q.answer }));
                optBox.querySelectorAll(".dailyOpt").forEach((x, xi) => {
                    x.disabled = true;
                    if (xi === q.answer) x.classList.add("correct");
                    if (xi === i && i !== q.answer) x.classList.add("wrong");
                });
                showDailyDone(i === q.answer, q);
                if (i === q.answer) { smxToast("⭐ Daily challenge completed!", "success"); evaluateAchievements(true); }
            };
        }
        optBox.appendChild(b);
    });

    if (doneToday) showDailyDone(saved.ok, q); else if (hintEl) hintEl.style.display = "block";

    function showDailyDone(ok, qq) {
        if (doneEl) {
            doneEl.style.display = "flex";
            doneEl.innerHTML = ok
                ? "✅ Correct! " + (qq.explanation || "")
                : "❌ Not quite. <b>Answer:</b> " + qq.options[qq.answer] + " — " + (qq.explanation || "");
        }
        if (hintEl) hintEl.style.display = "none";
    }
}

// ---------- Achievement system (functional, persistent) ----------

const ACHIEVEMENTS = [
    {
        id: "firstStep", icon: "🏆", name: "First Step", desc: "Complete your first quiz",
        test: s => s.quizzes >= 1, prog: s => [Math.min(s.quizzes, 1), 1]
    },
    {
        id: "perfect", icon: "🎯", name: "Perfect Score", desc: "Get 100% in a quiz",
        test: s => s.perfect, prog: s => [s.perfect ? 1 : 0, 1]
    },
    {
        id: "q50", icon: "📚", name: "50 Questions", desc: "Answer 50 questions",
        test: s => s.attempt >= 50, prog: s => [Math.min(s.attempt, 50), 50]
    },
    {
        id: "streak3", icon: "🔥", name: "3-Day Streak", desc: "Maintain a 3-day study streak",
        test: s => s.streak >= 3, prog: s => [Math.min(s.streak, 3), 3]
    },
    {
        id: "streak7", icon: "🔥", name: "7-Day Streak", desc: "Maintain a 7-day study streak",
        test: s => s.streak >= 7, prog: s => [Math.min(s.streak, 7), 7]
    },
    {
        id: "chapterMaster", icon: "🧠", name: "Chapter Master", desc: "80%+ accuracy with 10+ answers in one chapter",
        test: s => s.masterPct >= 80, prog: s => [Math.min(Math.round(s.masterPct), 80), 80]
    },
    {
        id: "explorer", icon: "⚡", name: "Science Explorer", desc: "Attempt questions from 5 different chapters",
        test: s => s.chapters >= 5, prog: s => [Math.min(s.chapters, 5), 5]
    },
    {
        id: "accuracyPro", icon: "💯", name: "Accuracy Pro", desc: "85%+ accuracy over 50 questions",
        test: s => s.attempt >= 50 && s.acc >= 85,
        prog: s => s.attempt < 50 ? [Math.min(s.attempt, 50), 50] : [Math.min(Math.round(s.acc), 85), 85]
    },
    {
        id: "scienceMaster", icon: "🏅", name: "Science Master", desc: "Attempt questions from all 13 chapters",
        test: s => s.chapters >= 13, prog: s => [Math.min(s.chapters, 13), 13]
    }
];

function achievementStats() {
    const stats = getChapterStats();
    let chapters = 0, masterPct = 0;
    for (const k in stats) {
        const s = stats[k];
        if (s && s.attempt > 0) chapters++;
        if (s && s.attempt >= 10) {
            const p = (s.correct / s.attempt) * 100;
            if (p > masterPct) masterPct = p;
        }
    }
    const attempt = Number(localStorage.getItem("attempt")) || 0;
    const correct = Number(localStorage.getItem("correct")) || 0;
    return {
        quizzes: Number(localStorage.getItem("quizzesTaken")) || 0,
        attempt: attempt,
        correct: correct,
        perfect: localStorage.getItem("perfectScore") === "1",
        streak: Number(localStorage.getItem("streak")) || 0,
        chapters: chapters,
        masterPct: masterPct,
        acc: attempt ? (correct / attempt) * 100 : 0
    };
}

function getUnlocked() {
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem("smxAchievements")) || {}; } catch (e) { }
    return saved;
}

let lastUnlockedIds = [];

function evaluateAchievements(notify) {
    const s = achievementStats();
    const saved = getUnlocked();
    let changed = false;
    lastUnlockedIds = [];
    ACHIEVEMENTS.forEach(a => {
        if (a.test(s) && !saved[a.id]) {
            saved[a.id] = Date.now();
            changed = true;
            lastUnlockedIds.push(a.id);
            if (notify) {
                smxToast("🏆 Achievement unlocked: " + a.name + "!", "success", 3200);
                playSound("achievement");
            }
        }
    });
    if (changed) localStorage.setItem("smxAchievements", JSON.stringify(saved));
    renderAchievements();
}

function renderAchievements() {
    const panel = document.getElementById("achievementsPanel") || document.getElementById("achievementsGrid");
    if (!panel) return;
    const saved = getUnlocked();
    const s = achievementStats();

    const unlocked = ACHIEVEMENTS.filter(a => saved[a.id]);
    const locked = ACHIEVEMENTS.filter(a => !saved[a.id]);

    function card(a, isUnlocked) {
        const just = lastUnlockedIds.includes(a.id) ? " just-unlocked" : "";
        if (isUnlocked) {
            const d = new Date(saved[a.id]);
            const dateStr = d.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
            return '<div class="achItem glass unlocked' + just + '">' +
                '<div class="aIcon">' + a.icon + '</div>' +
                '<div class="aBody"><b>' + a.name + '</b><small>' + a.desc + '</small>' +
                '<div class="aDate">✓ Unlocked · ' + dateStr + '</div></div></div>';
        }
        const p = a.prog(s);
        const pct = Math.min(100, Math.round((p[0] / p[1]) * 100));
        return '<div class="achItem glass locked">' +
            '<div class="aIcon">🔒</div>' +
            '<div class="aBody"><b>' + a.name + '</b><small>' + a.desc + '</small>' +
            '<div class="aProg"><div class="aBar"><span style="width:' + pct + '%"></span></div>' +
            '<em>' + p[0] + ' / ' + p[1] + '</em></div></div></div>';
    }

    panel.innerHTML =
        '<div class="achGroup"><h4>✅ Unlocked (' + unlocked.length + ')</h4>' +
        (unlocked.length ? unlocked.map(a => card(a, true)).join("") : '<div class="achEmpty">No achievements yet — complete a quiz to start!</div>') +
        '</div>' +
        '<div class="achGroup"><h4>🔒 Locked (' + locked.length + ')</h4>' +
        (locked.length ? locked.map(a => card(a, false)).join("") : '<div class="achEmpty">All achievements unlocked — you are a true Science Master! 🏅</div>') +
        '</div>';
}

// ---------- Chapter performance ----------

function renderChapterPerformance() {
    const strongBox = document.getElementById("perfStrong");
    const weakBox = document.getElementById("perfWeak");
    if (!strongBox || !weakBox) return;
    const stats = getChapterStats();
    const strong = [], weak = [];
    for (let c = 1; c <= 13; c++) {
        const s = stats[c];
        if (!s || s.attempt < 5) continue;
        const pct = Math.round((s.correct / s.attempt) * 100);
        if (pct >= 80) strong.push({ c, pct });
        else if (pct < 60) weak.push({ c, pct });
    }
    strongBox.innerHTML = strong.length
        ? strong.map(x => '<span class="perfChip strong">Ch ' + x.c + ' · ' + x.pct + '%</span>').join("")
        : '<span class="perfChip">Play a few quizzes to build your analysis</span>';
    weakBox.innerHTML = weak.length
        ? weak.map(x => '<span class="perfChip weak">Ch ' + x.c + ' · ' + x.pct + '%</span>').join("")
        : '<span class="perfChip">No weak chapters detected 💪</span>';

    const weakBtn = document.getElementById("weakPracticeBtn");
    if (weakBtn) {
        weakBtn.onclick = function () {
            if (wrongQuestions.length) {
                quizMode = "wrong";
                smxToast("🎯 Practicing " + wrongQuestions.length + " wrong question" + (wrongQuestions.length > 1 ? "s" : ""));
                startQuiz();
            } else if (weak.length) {
                chapterSelect.value = String(weak[0].c);
                setQuizMode("chapter", "Chapter Quiz", "📖");
                startQuiz();
            } else {
                smxToast("No weak topics yet — great job! 🎉", "success");
            }
        };
    }
}

// ==========================================
// Settings v2 — Themes, Custom, Volume, AI
// ==========================================

function syncThemeUI() {
    if (!window.smxTheme) return;
    const current = window.smxTheme.get();
    document.querySelectorAll(".themeBtn").forEach(b => {
        b.classList.toggle("active", b.dataset.themeOpt === current);
    });
    const panel = document.getElementById("customPanel");
    if (panel) panel.classList.toggle("open", current === "custom");

    const c = window.smxTheme.getCustom();
    const bgSel = document.getElementById("bgStyleSelect");
    if (bgSel) bgSel.value = c.bgStyle;
    const ca = document.getElementById("cardAlphaRange");
    if (ca) { ca.value = Math.round(c.cardAlpha * 100); }
    const caV = document.getElementById("cardAlphaVal"); if (caV) caV.textContent = Math.round(c.cardAlpha * 100) + "%";
    const br = document.getElementById("borderRange"); if (br) br.value = Math.round(c.border * 100);
    const brV = document.getElementById("borderVal"); if (brV) brV.textContent = Math.round(c.border * 100) + "%";
    const li = document.getElementById("brightnessRange"); if (li) li.value = Math.round(c.brightness * 100);
    const liV = document.getElementById("brightnessVal"); if (liV) liV.textContent = Math.round(c.brightness * 100) + "%";

    document.querySelectorAll("#accentSwatches .swatch").forEach(s => {
        s.classList.toggle("active", s.dataset.accent === c.accent);
    });
}

function initThemeControls() {
    if (!window.smxTheme) return;

    document.querySelectorAll(".themeBtn").forEach(b => {
        b.addEventListener("click", () => {
            playSound("click");
            window.smxTheme.set(b.dataset.themeOpt);
            syncThemeUI();
        });
    });

    // Accent swatches
    const SWATCHES = [
        ["#2563EB", "#06B6D4"], ["#7C3AED", "#EC4899"], ["#059669", "#84CC16"],
        ["#EA580C", "#F59E0B"], ["#0891B2", "#6366F1"], ["#DB2777", "#8B5CF6"]
    ];
    const swBox = document.getElementById("accentSwatches");
    if (swBox) {
        swBox.innerHTML = SWATCHES.map(s =>
            '<button class="swatch" type="button" data-accent="' + s[0] + '" data-accent2="' + s[1] +
            '" style="background:linear-gradient(135deg,' + s[0] + ',' + s[1] + ')" aria-label="Accent ' + s[0] + '"></button>'
        ).join("");
        swBox.addEventListener("click", e => {
            const s = e.target.closest(".swatch");
            if (!s) return;
            window.smxTheme.setCustom({ accent: s.dataset.accent, accent2: s.dataset.accent2 });
            syncThemeUI();
        });
    }

    const bind = (id, fn) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener("input", fn);
    };
    bind("bgStyleSelect", e => window.smxTheme.setCustom({ bgStyle: e.target.value }));
    bind("cardAlphaRange", e => {
        document.getElementById("cardAlphaVal").textContent = e.target.value + "%";
        window.smxTheme.setCustom({ cardAlpha: e.target.value / 100 });
    });
    bind("borderRange", e => {
        document.getElementById("borderVal").textContent = e.target.value + "%";
        window.smxTheme.setCustom({ border: e.target.value / 100 });
    });
    bind("brightnessRange", e => {
        document.getElementById("brightnessVal").textContent = e.target.value + "%";
        window.smxTheme.setCustom({ brightness: e.target.value / 100 });
    });

    syncThemeUI();
}

function initVolumeControl() {
    const vol = document.getElementById("volumeRange");
    const val = document.getElementById("volumeVal");
    if (!vol) return;
    const stored = window.smxStore
        ? Math.round((Number(window.smxStore.get().soundVolume) || 0.5) * 100)
        : Math.round((parseFloat(localStorage.getItem("smxVolume")) || 0.5) * 100);
    vol.value = isNaN(stored) ? 50 : stored;
    if (val) val.textContent = vol.value + "%";
    vol.addEventListener("input", () => {
        if (val) val.textContent = vol.value + "%";
        if (window.smxSetVolume) window.smxSetVolume(vol.value / 100);
    });
}

function initAiSettings() {
    const sel = document.getElementById("aiModeSelect");
    if (sel) {
        sel.value = (window.smxStore ? window.smxStore.get().aiMode : localStorage.getItem("smxAiMode")) || "explain";
        sel.onchange = () => {
            if (window.smxStore) window.smxStore.set({ aiMode: sel.value });
            else localStorage.setItem("smxAiMode", sel.value);
        };
    }
    const clearBtn = document.getElementById("clearAiHistoryBtn");
    if (clearBtn) {
        clearBtn.onclick = () => {
            if (!confirm("Clear the saved Science AI chat history on this device?")) return;
            localStorage.removeItem("smxAiChat");
            smxToast("AI chat history cleared", "success");
        };
    }
}

function initStudyResets() {
    const rb = document.getElementById("resetBookmarksBtn");
    if (rb) rb.onclick = () => {
        if (!confirm("Remove all bookmarked questions?")) return;
        bookmarks = [];
        localStorage.removeItem("bookmarks");
        loadDashboard();
        smxToast("Bookmarks cleared", "success");
    };
    const rw = document.getElementById("resetWrongBtn");
    if (rw) rw.onclick = () => {
        if (!confirm("Clear your wrong-question practice list?")) return;
        wrongQuestions = [];
        localStorage.removeItem("wrongQuestions");
        smxToast("Wrong questions cleared", "success");
    };
}

// Boot the smart features
initDailyChallenge();
renderAchievements();
renderChapterPerformance();
evaluateAchievements(false);
initThemeControls();
initVolumeControl();
initAiSettings();
initStudyResets();

// ==========================================
// Custom Quiz Setup selectors (UI layer only —
// the hidden native #chapter / #count selects remain
// the source of truth for the quiz engine)
// ==========================================

function syncQuizSetupUI() {
    const label = document.getElementById("chapterCustomLabel");
    if (label && chapterSelect) {
        const opt = chapterSelect.options[chapterSelect.selectedIndex];
        label.textContent = opt ? opt.textContent : "All Chapters";
    }
    document.querySelectorAll("#chapterCustomPop .cOpt").forEach(o => {
        o.classList.toggle("sel", o.dataset.val === chapterSelect.value);
    });
    document.querySelectorAll(".countChip").forEach(c => {
        c.classList.toggle("active", c.dataset.count === countSelect.value);
    });
}

function initQuizSetupUI() {
    const wrap = document.getElementById("chapterCustom");
    const btn = document.getElementById("chapterCustomBtn");
    const pop = document.getElementById("chapterCustomPop");

    if (wrap && btn && pop && chapterSelect) {
        pop.innerHTML = "";
        Array.prototype.forEach.call(chapterSelect.options, function (o) {
            const b = document.createElement("button");
            b.type = "button";
            b.className = "cOpt";
            b.dataset.val = o.value;
            b.setAttribute("role", "option");
            b.innerHTML = "<span>" + o.textContent + "</span><span class='tick'>✓</span>";
            b.onclick = function (e) {
                e.stopPropagation();
                chapterSelect.value = o.value;
                playSound("select");
                closePop();
                syncQuizSetupUI();
            };
            pop.appendChild(b);
        });

        function closePop() {
            wrap.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
        }
        btn.onclick = function (e) {
            e.stopPropagation();
            const open = wrap.classList.toggle("open");
            btn.setAttribute("aria-expanded", open ? "true" : "false");
        };
        document.addEventListener("click", function (e) {
            if (!wrap.contains(e.target)) closePop();
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") closePop();
        });
    }

    const chips = document.getElementById("countChips");
    if (chips && countSelect) {
        chips.addEventListener("click", function (e) {
            const c = e.target.closest(".countChip");
            if (!c) return;
            countSelect.value = c.dataset.count;
            playSound("select");
            syncQuizSetupUI();
        });
    }
    syncQuizSetupUI();
}

initQuizSetupUI();
window.smxSyncQuizSetupUI = syncQuizSetupUI;

// Expose for the settings open hook
window.addEventListener("smxSettingsOpen", syncThemeUI);

// ==========================================
console.log("Science Master X loaded successfully ✓");
