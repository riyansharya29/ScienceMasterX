const chapters = [

["chapter1.png","Chemical Reactions and Equations"],
["chapter2.png","Acids, Bases and Salts"],
["chapter3.png","Metals and Non-metals"],
["chapter4.png","Carbon and its Compounds"],
["chapter5.png","Life Processes"],
["chapter6.png","Control and Coordination"],
["chapter7.png","How do Organisms Reproduce?"],
["chapter8.png","Heredity"],
["chapter9.png","Light - Reflection and Refraction"],
["chapter10.png","Human Eye and Colourful World"],
["chapter11.png","Electricity"],
["chapter12.png","Magnetic Effects of Electric Current"],
["chapter13.png","Our Environment"]

];

const list=document.getElementById("mindmapList");

chapters.forEach((c,i)=>{

list.innerHTML+=`

<button class="mapCard" onclick="openMap('${c[0]}')">

<div>

<h2>🧠 Chapter ${i+1}</h2>

<p>${c[1]}</p>

</div>

<span>➜</span>

</button>

`;

});

function openMap(file){

window.location.href="mindmaps/"+file;

}

const search=document.getElementById("searchBox");

search.addEventListener("keyup",()=>{

let filter=search.value.toLowerCase();

document.querySelectorAll(".mapCard").forEach(card=>{

card.style.display=
card.innerText.toLowerCase().includes(filter)
?"flex":"none";

});

});