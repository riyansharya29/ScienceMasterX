function openPDF(file){

window.location.href="notes/"+file;

}

const searchBox=document.getElementById("searchBox");

searchBox.addEventListener("keyup",()=>{

let filter=searchBox.value.toLowerCase();

document.querySelectorAll(".noteCard").forEach(card=>{

let txt=card.innerText.toLowerCase();

card.style.display=txt.includes(filter)?"flex":"none";

});

function openPDF(file){
    window.location.href = "notes/" + file;
}

const searchBox = document.getElementById("searchBox");

if(searchBox){
    searchBox.addEventListener("keyup", function(){

        let filter = this.value.toLowerCase();
        let cards = document.querySelectorAll(".noteCard");

        cards.forEach(card => {
            let text = card.innerText.toLowerCase();
            card.style.display = text.includes(filter) ? "flex" : "none";
        });

    });
}

});