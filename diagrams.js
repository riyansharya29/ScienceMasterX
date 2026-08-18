const chapterSelect = document.getElementById("chapterSelect");
const diagramImage = document.getElementById("diagramImage");

function loadDiagram() {

    diagramImage.src = "diagrams/chapter" + chapterSelect.value + ".png";

}

chapterSelect.addEventListener("change", loadDiagram);

loadDiagram();