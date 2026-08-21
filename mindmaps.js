/* ==========================================================
   SCIENCE MASTER X — MIND MAPS
   Existing data + paths preserved:
   • chapters array unchanged
   • images load from mindmaps/chapterN.png
   ========================================================== */

const chapters = [

    ["chapter1.png", "Chemical Reactions and Equations"],
    ["chapter2.png", "Acids, Bases and Salts"],
    ["chapter3.png", "Metals and Non-metals"],
    ["chapter4.png", "Carbon and its Compounds"],
    ["chapter5.png", "Life Processes"],
    ["chapter6.png", "Control and Coordination"],
    ["chapter7.png", "How do Organisms Reproduce?"],
    ["chapter8.png", "Heredity"],
    ["chapter9.png", "Light - Reflection and Refraction"],
    ["chapter10.png", "Human Eye and Colourful World"],
    ["chapter11.png", "Electricity"],
    ["chapter12.png", "Magnetic Effects of Electric Current"],
    ["chapter13.png", "Our Environment"]

];

const list = document.getElementById("mindmapList");

chapters.forEach((c, i) => {

    const num = i + 1;
    const src = "mindmaps/" + c[0];

    list.innerHTML += `

    <button class="mapCard glass card-hover" onclick="openMap('${c[0]}', ${num})">
        <div class="mapPreview">
            <img src="${src}" alt="Chapter ${num} mind map" loading="lazy"
                 onerror="this.outerHTML='<div class=&quot;ph&quot;>🧠<small>Preview coming soon</small></div>'">
        </div>
        <div class="mapMeta">
            <div class="mapNum">${num}</div>
            <div>
                <h2>${c[1]}</h2>
                <p>Open Mind Map →</p>
            </div>
        </div>
    </button>

    `;
});

function openMap(file, num) {
    // Premium in-app viewer first; the file path is the same as before
    const viewer = document.getElementById("mmViewer");
    const img = document.getElementById("mmViewerImg");
    const title = document.getElementById("mmViewerTitle");
    const src = "mindmaps/" + file;

    if (viewer && img) {
        if (title) title.textContent = "🧠 Chapter " + num + " · " + (chapters[num - 1] ? chapters[num - 1][1] : "");
        img.src = src;
        // If the image is missing, fall back to the original behaviour (open the file directly)
        img.onerror = function () { window.location.href = src; };
        viewer.classList.add("open");
        document.body.style.overflow = "hidden";
        return;
    }

    window.location.href = src;
}

// ---------- Zoom controls ----------
(function () {
    let z = 1;
    const img = document.getElementById("mmViewerImg");
    if (!img) return;
    const set = v => { z = Math.min(3, Math.max(0.5, v)); img.style.transform = "scale(" + z + ")"; };
    const zin = document.getElementById("mmZoomIn");
    const zout = document.getElementById("mmZoomOut");
    const zr = document.getElementById("mmZoomReset");
    if (zin) zin.onclick = () => set(z + 0.25);
    if (zout) zout.onclick = () => set(z - 0.25);
    if (zr) zr.onclick = () => set(1);
})();

// Close viewer
const mmViewer = document.getElementById("mmViewer");
const mmViewerClose = document.getElementById("mmViewerClose");
if (mmViewerClose && mmViewer) {
    mmViewerClose.onclick = function () {
        mmViewer.classList.remove("open");
        document.body.style.overflow = "";
    };
    mmViewer.addEventListener("click", function (e) {
        if (e.target === mmViewer || e.target.classList.contains("mmViewerBody")) {
            mmViewer.classList.remove("open");
            document.body.style.overflow = "";
        }
    });
}

// Search
const search = document.getElementById("searchBox");

search.addEventListener("keyup", () => {

    let filter = search.value.toLowerCase();
    let visible = 0;

    document.querySelectorAll(".mapCard").forEach(card => {
        const match = card.textContent.toLowerCase().includes(filter);
        card.style.display = match ? "flex" : "none";
        if (match) visible++;
    });

    const noResults = document.getElementById("noResults");
    if (noResults) noResults.style.display = visible ? "none" : "block";
});
