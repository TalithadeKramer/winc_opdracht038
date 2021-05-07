const spotted = document.getElementById("spotted-animals-list");

const button = document.getElementsByClassName("big-five-button");

//Lion
const lionSpot = document.createElement("li");
lionSpot.classList.add("spotted-animals-list-item");
lionSpot.innerText = "Lion";

function knop0() { spotted.appendChild(lionSpot); };

button[0].onclick = knop0;


//Leopard
const leopardSpot = document.createElement("li");
leopardSpot.classList.add("spotted-animals-list-item");
leopardSpot.innerText = "Leopard";

function knop1() { spotted.appendChild(leopardSpot); };

button[1].onclick = knop1;


//Elephant
const elephantSpot = document.createElement("li");
elephantSpot.classList.add("spotted-animals-list-item");
elephantSpot.innerText = "Elephant";

function knop2() { spotted.appendChild(elephantSpot); };

button[2].onclick = knop2;


//Rhino
const rhinoSpot = document.createElement("li");
rhinoSpot.classList.add("spotted-animals-list-item");
rhinoSpot.innerText = "Rhino";

function knop3() { spotted.appendChild(rhinoSpot); };

button[3].onclick = knop3;


//Buffalo
const buffaloSpot = document.createElement("li");
buffaloSpot.classList.add("spotted-animals-list-item");
buffaloSpot.innerText = "Buffalo";

function knop4() { spotted.appendChild(buffaloSpot); };

button[4].onclick = knop4;




//Remove
const remove = document.getElementById("remove-first-item-button");

function verwijder() { spotted.removeChild(spotted.childNodes[0]) };

remove.onclick = verwijder;



//Remove all
const removeAll = document.getElementById("remove-all-button");

function verwijderAll() { spotted.innerHTML = " " };

removeAll.onclick = verwijderAll; 