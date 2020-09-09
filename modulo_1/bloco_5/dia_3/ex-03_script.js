//TAREFA 01

let divButton = document.querySelector(".tarefa1");

let createButton = document.createElement("button");
createButton.className = "class-button";

divButton.appendChild(createButton);

let button1 = document.querySelector(".class-button");
button1.innerHTML = "Click on me";

button1.addEventListener("click", function(){
    alert("Voce clicou no botão!")
})


//TAREFA 02


