/* ==========================================
   SCIENCE MASTER X V3
   SCRIPT.JS
   PART 1A
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

const finalScore =
document.getElementById("finalScore");

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


// =========================
// Load Dashboard
// =========================

window.onload = function () {
    loadDashboard();
};

// =========================
// Dashboard
// =========================

function loadDashboard(){

    let high = Number(localStorage.getItem("highScore")) || 0;
    highScoreBox.innerHTML = high + "%";

    bookmarkCount.innerHTML = bookmarks.length;

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
    if (accuracyBox) {
        const accuracy = totalAttempt ? Math.round((totalCorrect / totalAttempt) * 100) : 0;
        accuracyBox.textContent = accuracy + "%";
    }
    if (questionCountBox && typeof questions !== "undefined") {
        questionCountBox.textContent = questions.length + "+";
    }

    const savedName = localStorage.getItem("studentName");
    const nameInput = document.getElementById("studentName");
    if (nameInput && savedName && savedName !== "CBSE Student") {
        nameInput.value = savedName;
    }

}


// =========================
// Start Quiz
// =========================

startBtn.addEventListener("click",startQuiz);

function startQuiz(){


    currentQuestion = 0;

    score = 0;

    timer = 0;

    selectedAnswer = null;

    localStorage.setItem(
    "studentName",
    document.getElementById("studentName").value || "CBSE Student"
);

    homeScreen.style.display = "none";

    resultScreen.style.display = "none";

    quizScreen.style.display = "block";

    prepareQuestions();

    startTimer();

    showQuestion();

}

// =========================
// Prepare Questions
// =========================

function prepareQuestions() {

    let chapter = chapterSelect.value;
    let total = Number(countSelect.value);

    if (quizMode === "bookmark") {

        allQuestions = [...bookmarks];

    } else if (quizMode === "wrong") {

        allQuestions = [...wrongQuestions];

    } else if (quizMode === "full") {

        allQuestions = [...questions];

    } else {

        if (chapter === "all") {

            allQuestions = [...questions];

        } else {

            allQuestions = questions.filter(q => q.chapter == chapter);

        }

    }

    shuffle(allQuestions);

    selectedQuestions = allQuestions.slice(0, total);

    console.log("Questions:", questions.length);
    console.log("Filtered:", allQuestions.length);
    console.log("Selected:", selectedQuestions.length);

    if (selectedQuestions.length === 0) {

        alert("No Questions Available");

        homeScreen.style.display = "block";
        quizScreen.style.display = "none";

        return;
    }

}
// =========================
// Shuffle
// =========================

function shuffle(array){

    console.log("Filtered:", allQuestions.length);

    for(
        let i=array.length-1;
        i>0;
        i--
    ){

        let j=
        Math.floor(
        Math.random()*(i+1)
        );

        [array[i],array[j]]=
        [array[j],array[i]];

    }

}
// =========================
// Timer
// =========================

function startTimer(){

    if(localStorage.getItem("timerEnabled")=="false") return;

    clearInterval(timerInterval);

    timerInterval = setInterval(function(){

        timer++;

        let min = Math.floor(timer / 60);
        let sec = timer % 60;

        if(min < 10) min = "0" + min;
        if(sec < 10) sec = "0" + sec;

        timerBox.innerHTML = "⏱ " + min + ":" + sec;

    },1000);

}

// =========================
// Show Question
// =========================

function showQuestion(){

    selectedAnswer = null;

    explanationBox.style.display = "none";
    explanationBox.innerHTML = "";

    let q = selectedQuestions[currentQuestion];

    if(!q){

        finishQuiz();
        return;

    }

    progressBox.innerHTML =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        selectedQuestions.length;

    scoreBox.innerHTML =
        "Score : " + score;

    let progress =
        ((currentQuestion + 1) /
        selectedQuestions.length) * 100;

    progressFill.style.width =
        progress + "%";

    chapterTitle.innerHTML =
        "Chapter : " + q.chapter;

    questionBox.innerHTML =
        q.question;

    optionsBox.innerHTML = "";

    q.options.forEach(function(option,index){

        let div =
        document.createElement("div");

        div.className = "option";

        div.innerHTML =
        "<b>" +
        String.fromCharCode(65+index) +
        ".</b> " +
        option;

        div.onclick = function(){

            document
            .querySelectorAll(".option")
            .forEach(function(x){

                x.classList.remove("selected");

            });

            div.classList.add("selected");

            selectedAnswer = index;

        };

        optionsBox.appendChild(div);

    });

}
// =========================
// Next Button
// =========================

nextBtn.addEventListener("click", nextQuestion);

function nextQuestion(){

    if(selectedAnswer === null){

        alert("Please select an option.");

        return;

    }

    checkAnswer();

}

// =========================
// Check Answer
// =========================

function checkAnswer(){

    let q = selectedQuestions[currentQuestion];

    let optionList =
    document.querySelectorAll(".option");

    optionList.forEach(function(option,index){

        option.style.pointerEvents="none";

        if(index===q.answer){

            option.classList.add("correct");

        }

        if(
            index===selectedAnswer &&
            selectedAnswer!==q.answer
        ){

            option.classList.add("wrong");

        }

    });

    if(selectedAnswer===q.answer){

    score++;

    playSound("correct");

    saveAnalytics(true);

}
else{

    saveWrongQuestion();

    playSound("wrong");

    saveAnalytics(false);

}

    scoreBox.innerHTML="Score : "+score;
saveProgress();
    // Explanation

    if(q.explanation){

        explanationBox.style.display="block";

        explanationBox.innerHTML=
        "<b>Explanation :</b><br><br>"+q.explanation;

    }

    nextBtn.disabled=true;

    setTimeout(function(){

        nextBtn.disabled=false;

        currentQuestion++;

        if(currentQuestion>=selectedQuestions.length){

            finishQuiz();

        }else{

            showQuestion();

        }

    },1500);

}
// =========================
// Finish Quiz
// =========================

function finishQuiz(){

    const percentage = Math.round((score / selectedQuestions.length) * 100);
const wrong = selectedQuestions.length - score;

document.getElementById("percentageText").textContent = percentage + "%";
document.getElementById("correctResult").textContent = score;
document.getElementById("wrongResult").textContent = wrong;
document.getElementById("timeResult").textContent = timerBox.textContent;

    clearInterval(timerInterval);

    quizScreen.style.display = "none";

    resultScreen.style.display = "block";

    // High Score Save

    let oldHigh =
        Number(localStorage.getItem("highScore")) || 0;

    if(percentage > oldHigh){

        localStorage.setItem(
            "highScore",
            percentage
        );

    }

    // Final Result

    let message = "";

    if(percentage >= 90){

        message = "🏆 Outstanding";

    }
    else if(percentage >= 75){

        message = "🥇 Excellent";

    }
    else if(percentage >= 60){

        message = "👍 Good Job";

    }
    else if(percentage >= 40){

        message = "🙂 Keep Practicing";

    }
    else{

        message = "📚 Study More";

    }

    document.getElementById("resultScore").textContent = score + " / " + selectedQuestions.length;
    document.getElementById("resultPercentage").textContent = percentage + "%";
    document.getElementById("resultTime").textContent = timerBox.textContent;

    loadDashboard();

document.getElementById("percentageText").textContent = percentage + "%";
document.getElementById("correctResult").textContent = score;
document.getElementById("wrongResult").textContent = wrong;
document.getElementById("timeResult").textContent = timerBox.textContent;

let grade = "";

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

}


// =========================
// Restart Quiz
// =========================

const restartBtn =
document.getElementById("restartBtn");

restartBtn.addEventListener(
    "click",
    function(){

        resultScreen.style.display="none";

        startQuiz();

    }
);


// =========================
// Home Button
// =========================

const homeBtn =
document.getElementById("homeBtn");

homeBtn.addEventListener(
    "click",
    function(){

        clearInterval(timerInterval);

        resultScreen.style.display="none";

        quizScreen.style.display="none";

        homeScreen.style.display="block";

        loadDashboard();

    }
);


// =========================
// Keyboard Support
// =========================

document.addEventListener(
"keydown",
function(e){

    if(e.key==="1")
        document.querySelectorAll(".option")[0]?.click();

    if(e.key==="2")
        document.querySelectorAll(".option")[1]?.click();

    if(e.key==="3")
        document.querySelectorAll(".option")[2]?.click();

    if(e.key==="4")
        document.querySelectorAll(".option")[3]?.click();

    if(e.key==="Enter")
        nextBtn.click();

});


// =========================
// Console
// =========================

console.log("Science Master X V3 Loaded Successfully");
// ==========================================
// PART 3
// Bookmarks + Wrong Questions + Accuracy
// ==========================================

// --------------------------
// Bookmark Button
// --------------------------

const bookmarkBtn =
document.getElementById("bookmarkBtn");

bookmarkBtn.addEventListener(
"click",
toggleBookmark
);

function toggleBookmark(){

    let q =
    selectedQuestions[currentQuestion];

    let index =
    bookmarks.findIndex(
    item=>item.question===q.question
    );

    if(index===-1){

        bookmarks.push(q);

        alert("⭐ Question Bookmarked");

    }else{

        bookmarks.splice(index,1);

        alert("❌ Bookmark Removed");

    }

    localStorage.setItem(
    "bookmarks",
    JSON.stringify(bookmarks)
    );

    updateDashboard();

}

// --------------------------
// Save Wrong Questions
// --------------------------

function saveWrongQuestion(){

    let q =
    selectedQuestions[currentQuestion];

    let exists =
    wrongQuestions.find(
    item=>item.question===q.question
    );

    if(!exists){

        wrongQuestions.push(q);

        localStorage.setItem(
        "wrongQuestions",
        JSON.stringify(wrongQuestions)
        );

    }

}
// --------------------------
// Dashboard Update
// --------------------------

function updateDashboard(){

    bookmarkCount.innerHTML =
    bookmarks.length;

    let high =
    Number(
    localStorage.getItem("highScore")
    ) || 0;

    highScoreBox.innerHTML =
    high + "%";

    let totalAttempt =
    Number(
    localStorage.getItem("attempt")
    ) || 0;

    let totalCorrect =
    Number(
    localStorage.getItem("correct")
    ) || 0;

    let accuracy = 0;

    if(totalAttempt>0){

        accuracy =
        Math.round(
        (totalCorrect/totalAttempt)*100
        );

    }

    let accuracyBox =
    document.getElementById("accuracy");

    if(accuracyBox){

        accuracyBox.innerHTML =
        accuracy + "%";

    }

}

// --------------------------
// Save Accuracy
// --------------------------

function saveProgress(){

    let attempt =
    Number(
    localStorage.getItem("attempt")
    ) || 0;

    let correct =
    Number(
    localStorage.getItem("correct")
    ) || 0;

    attempt++;

    if(selectedAnswer===selectedQuestions[currentQuestion].answer){

        correct++;

    }

    localStorage.setItem(
    "attempt",
    attempt
    );

    localStorage.setItem(
    "correct",
    correct
    );

}
// ==========================================
// PART 4A
// Quiz Modes
// ==========================================

let quizMode = "chapter";

// Buttons
const chapterQuizBtn = document.getElementById("chapterQuizBtn");
const fullQuizBtn = document.getElementById("fullQuizBtn");
const bookmarkQuizBtn = document.getElementById("bookmarkQuizBtn");
const wrongQuizBtn = document.getElementById("wrongQuizBtn");

// Chapter Quiz
chapterQuizBtn.onclick = function(){

    quizMode = "chapter";

    alert("📖 Chapter Quiz Selected");

};

// Full Syllabus
fullQuizBtn.onclick = function(){

    quizMode = "full";

    chapterSelect.value = "all";

    if(countSelect.querySelector('option[value="50"]')){
        countSelect.value = "50";
    }

    alert("🎯 Full Syllabus Selected");

};

// Bookmark Quiz
bookmarkQuizBtn.onclick = function(){

    quizMode = "bookmark";

    alert("⭐ Bookmark Quiz Selected");

};

// Wrong Questions Quiz
wrongQuizBtn.onclick = function(){

    quizMode = "wrong";

    alert("❌ Wrong Questions Selected");

};
// ==========================================
// PART 4B
// Settings
// ==========================================

// Elements

const settingsModal =
document.getElementById("settingsModal");

const closeSettings =
document.getElementById("closeSettings");

const darkModeToggle =
document.getElementById("darkModeToggle");

const timerToggle =
document.getElementById("timerToggle");

const soundToggle =
document.getElementById("soundToggle");


// Load Settings

loadSettings();

const settingsStudentName = document.getElementById("settingsStudentName");

function refreshSettingsProfile(){
    if(settingsStudentName){
        settingsStudentName.textContent = localStorage.getItem("studentName") || "CBSE Student";
    }
}

refreshSettingsProfile();

function loadSettings(){

    let dark =
    JSON.parse(localStorage.getItem("darkMode"));

    let timerEnabled =
    JSON.parse(localStorage.getItem("timerEnabled"));

    let sound =
    JSON.parse(localStorage.getItem("soundEnabled"));

    if(dark===null) dark=true;
    if(timerEnabled===null) timerEnabled=true;
    if(sound===null) sound=true;

    darkModeToggle.checked=dark;
    timerToggle.checked=timerEnabled;
    soundToggle.checked=sound;

    applyDarkMode(dark);

}


// Apply Dark Mode

function applyDarkMode(enable){

    if(enable){

        document.body.classList.remove("light");

    }else{

        document.body.classList.add("light");

    }

}


// Dark Mode

darkModeToggle.onchange=function(){

    localStorage.setItem(
    "darkMode",
    darkModeToggle.checked
    );

    applyDarkMode(
    darkModeToggle.checked
    );

};


// Timer Toggle

timerToggle.onchange=function(){

    localStorage.setItem(
    "timerEnabled",
    timerToggle.checked
    );

};


// Sound Toggle

soundToggle.onchange=function(){

    localStorage.setItem(
    "soundEnabled",
    soundToggle.checked
    );

};


// Close Settings

closeSettings.onclick=function(){
    if(window.closeSettingsPanel) window.closeSettingsPanel();
    else settingsModal.style.display="none";
};
const settingsBtn =
document.getElementById("settingsBtn");

settingsBtn.onclick=function(){
    if(window.openSettings) window.openSettings();
    else {
        refreshSettingsProfile();
        settingsModal.style.display="flex";
    }
};
const resetProgressBtn = document.getElementById("resetProgressBtn");
if(resetProgressBtn){
    resetProgressBtn.onclick=function(){
        if(!confirm("Reset all Science Master X progress? This cannot be undone.")) return;
        ["highScore","attempt","correct","streak","studentName","timerEnabled","soundEnabled","darkMode"].forEach(k=>localStorage.removeItem(k));
        localStorage.removeItem("bookmarks");
        localStorage.removeItem("wrongQuestions");
        refreshSettingsProfile();
        loadDashboard();
        loadSettings();
        alert("Progress reset successfully.");
    };
}

// ==========================================
// PART 5A
// Sounds + Analytics + Streak
// ==========================================

// ---------- Audio ----------

const clickSound = new Audio("assets/sounds/click.mp3");
const correctSound = new Audio("assets/sounds/correct.mp3");
const wrongSound = new Audio("assets/sounds/wrong.mp3");

// ---------- Play Sound ----------

function playSound(type){

    let enabled =
    localStorage.getItem("soundEnabled");

    if(enabled=="false") return;

    if(type=="click"){

        clickSound.currentTime=0;
        clickSound.play();

    }

    if(type=="correct"){

        correctSound.currentTime=0;
        correctSound.play();

    }

    if(type=="wrong"){

        wrongSound.currentTime=0;
        wrongSound.play();

    }

}

// ---------- Analytics ----------

function saveAnalytics(correct){

    let played =
    Number(localStorage.getItem("played"))||0;

    let correctAns =
    Number(localStorage.getItem("correctAns"))||0;

    played++;

    if(correct){

        correctAns++;

    }

    localStorage.setItem(
    "played",
    played
    );

    localStorage.setItem(
    "correctAns",
    correctAns
    );

}

// ---------- Daily Streak ----------

function updateStreak(){

    let today =
    new Date().toDateString();

    let last =
    localStorage.getItem("lastOpen");

    let streak =
    Number(localStorage.getItem("streak"))||0;

    if(last!=today){

        streak++;

        localStorage.setItem(
        "streak",
        streak
        );

        localStorage.setItem(
        "lastOpen",
        today
        );

    }

}

updateStreak();
document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

playSound("click");

});

});
const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {


    const percentage = Math.round((score / selectedQuestions.length) * 100);

    const text =
`🏆 Science Master X

Score : ${score}/${selectedQuestions.length}

Percentage : ${percentage}%

Time : ${timerBox.textContent}`;

    if (navigator.share) {

        navigator.share({
            title: "Science Master X",
            text: text
        });

    } else 

        navigator.clipboard.writeText(text);

        alert("Result copied to clipboard!");
     

    /* ==========================================
   CERTIFICATE SYSTEM
========================================== */

const viewCertificate =
document.getElementById("viewCertificate");

const certificateModal =
document.getElementById("certificateModal");

const closeCertificate =
document.querySelector(".closeCertificate");

viewCertificate.onclick = function(){

    let percentage =
    Math.round((score/selectedQuestions.length)*100);

    document.getElementById("certificateStudentName").innerHTML =
    localStorage.getItem("studentName") || "CBSE Student";

    document.getElementById("certificateChapter").innerHTML =
    chapterSelect.options[chapterSelect.selectedIndex].text;

    document.getElementById("certificateScore").innerHTML =
    score + " / " + selectedQuestions.length;

    document.getElementById("certificatePercentage").innerHTML =
    percentage + "%";

    let grade="C";

    if(percentage>=95) grade="A+";
    else if(percentage>=90) grade="A";
    else if(percentage>=80) grade="B+";
    else if(percentage>=70) grade="B";
    else if(percentage>=60) grade="C";
    else grade="Needs Improvement";

    document.getElementById("certificateGrade").innerHTML =
    grade;

    document.getElementById("certificateDate").innerHTML =
    new Date().toLocaleDateString();

    document.getElementById("certificateId").innerHTML =
    "SMX-"+Date.now();

    certificateModal.style.display="flex";

}

closeCertificate.onclick=function(){

certificateModal.style.display="none";

}

window.onclick=function(e){

if(e.target==certificateModal){

certificateModal.style.display="none";

}

}
// =========================
// STUDY RESOURCE BUTTONS
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const notesCard = document.getElementById("notesCard");
    const quizCard = document.getElementById("quizCard");

    if (notesCard) {
        notesCard.addEventListener("click", () => {
            window.location.href = "notes.html";
        });
    }

    if (quizCard) {
        quizCard.addEventListener("click", () => {
            const startBtn = document.getElementById("startBtn");
            if (startBtn) startBtn.click();
        });
    }

});

})

// Mobile UI safety bridge: keep settings and name controls working on touch devices.
(function(){
  function syncMobileName(){
    var n=localStorage.getItem("studentName") || "Student";
    var a=document.getElementById("mobileStudentName");
    var b=document.getElementById("settingsStudentName");
    if(a) a.textContent=n;
    if(b) b.textContent=n;
  }
  window.addEventListener("storage",syncMobileName);
  window.addEventListener("load",syncMobileName);
})();
