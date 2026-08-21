/* ==========================================================
   SCIENCE MASTER X — NCERT NOTES (v5)
   The ENTIRE chapter card is now a real accessible link:
     <a href="notes/chapterNx.pdf" target="_blank">
   Relative path → works on any deployment base (GitHub Pages
   under /ScienceMasterX/ etc.). No fake URLs, no placeholders,
   no JS required to open the PDF.
   The small 🔍 span (not a link) opens the in-app viewer as an
   optional preview fallback.
   ========================================================== */

function openViewer(ch) {
    window.location.href = "viewer.html?ch=" + ch;
}

const searchBox = document.getElementById("searchBox");

if (searchBox) {
    searchBox.addEventListener("keyup", function () {
        const filter = this.value.toLowerCase();
        let visible = 0;

        document.querySelectorAll(".noteCard").forEach(card => {
            const match = card.textContent.toLowerCase().includes(filter);
            card.style.display = match ? "flex" : "none";
            if (match) visible++;
        });

        const noResults = document.getElementById("noResults");
        if (noResults) noResults.style.display = visible ? "none" : "block";
    });
}
