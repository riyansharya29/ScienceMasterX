/* ==========================================================
   SCIENCE MASTER X — IMPORTANT DIAGRAMS (v4)
   Now mirrors the Mind Maps experience:
   chapter cards with REAL diagram thumbnails → tap the whole
   card → clean fullscreen preview (zoom + back + close).
   Real assets preserved: diagrams/ChapterN.png (unchanged).
   ========================================================== */

const DG_CHAPTERS = [
    [1, "Chemical Reactions and Equations"],
    [2, "Acids, Bases and Salts"],
    [3, "Metals and Non-metals"],
    [4, "Carbon and its Compounds"],
    [5, "Life Processes"],
    [6, "Control and Coordination"],
    [7, "How do Organisms Reproduce?"],
    [8, "Heredity"],
    [9, "Light - Reflection and Refraction"],
    [10, "Human Eye and Colourful World"],
    [11, "Electricity"],
    [12, "Magnetic Effects of Electric Current"],
    [13, "Our Environment"]
];

function dgSrc(n) { return "diagrams/Chapter" + n + ".png"; }   // real uploaded assets

const grid = document.getElementById("diagramGrid");

DG_CHAPTERS.forEach(function (c) {
    const n = c[0], name = c[1];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "dgCardX glass card-hover";
    card.setAttribute("aria-label", "Open Chapter " + n + " diagrams: " + name);
    card.innerHTML =
        '<div class="dgPreviewThumb">' +
        '<img src="' + dgSrc(n) + '" alt="Chapter ' + n + ' important diagrams" loading="lazy" ' +
        'onerror="this.outerHTML=\'<div class=&quot;ph&quot;>🧪<small>Preview coming soon</small></div>\'">' +
        '</div>' +
        '<div class="dgMeta">' +
        '<div class="dgNum">' + n + '</div>' +
        '<div><h2>' + name + '</h2><p>Open Diagrams →</p></div>' +
        '</div>';
    card.onclick = function () { openDgViewer(n, name); };
    grid.appendChild(card);
});

// ---------- Fullscreen viewer ----------

const dgViewer = document.getElementById("dgViewer");
const dgViewerImg = document.getElementById("dgViewerImg");
const dgViewerTitle = document.getElementById("dgViewerTitle");

function openDgViewer(n, name) {
    if (!dgViewer || !dgViewerImg) return;
    if (dgViewerTitle) dgViewerTitle.textContent = "🧪 Chapter " + n + " · " + name;
    dgViewerImg.style.transform = "scale(1)";
    dgZoomLevel = 1;
    dgViewerImg.src = dgSrc(n);
    dgViewerImg.onerror = function () {
        if (window.smxToast) smxToast("Diagram file not found", "error");
    };
    dgViewer.classList.add("open");
    document.body.style.overflow = "hidden";
    playSound("click");
}

function closeDgViewer() {
    dgViewer.classList.remove("open");
    document.body.style.overflow = "";
}

document.getElementById("dgViewerClose").onclick = closeDgViewer;
document.getElementById("dgViewerBack").onclick = closeDgViewer;
dgViewer.addEventListener("click", function (e) {
    if (e.target === dgViewer || e.target.classList.contains("dgViewerBody")) closeDgViewer();
});
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && dgViewer.classList.contains("open")) closeDgViewer();
});

// ---------- Zoom ----------
let dgZoomLevel = 1;
function dgSetZoom(v) {
    dgZoomLevel = Math.min(3, Math.max(0.5, v));
    dgViewerImg.style.transform = "scale(" + dgZoomLevel + ")";
}
document.getElementById("dgZoomIn").onclick = function () { dgSetZoom(dgZoomLevel + 0.25); };
document.getElementById("dgZoomOut").onclick = function () { dgSetZoom(dgZoomLevel - 0.25); };
document.getElementById("dgZoomReset").onclick = function () { dgSetZoom(1); };

// ---------- Search ----------
const search = document.getElementById("searchBox");
search.addEventListener("keyup", function () {
    const filter = search.value.toLowerCase();
    let visible = 0;
    document.querySelectorAll(".dgCardX").forEach(function (card) {
        const match = card.textContent.toLowerCase().includes(filter);
        card.style.display = match ? "flex" : "none";
        if (match) visible++;
    });
    const noResults = document.getElementById("noResults");
    if (noResults) noResults.style.display = visible ? "none" : "block";
});
