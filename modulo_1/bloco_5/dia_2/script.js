//Primeira tarefa

let body = document.querySelector("body");
let titulo = document.createElement("h1");
body.appendChild(titulo);

//Segunda tarefa
let primeiraDiv = document.createElement("div");
primeiraDiv.className = "main-content";
body.appendChild(primeiraDiv);

//Terceira tarefa
let divCentral = document.createElement("div");
divCentral.className = "center-content";
primeiraDiv.appendChild(divCentral);

//Quarta tarefa
let primeiroP = document.createElement("p");
divCentral.appendChild(primeiroP);
document.querySelector("p").innerHTML = "Algum texto";

//Quinta tarefa
let divEsquerda = document.createElement("div");
divEsquerda.className = "left-content";
primeiraDiv.appendChild(divEsquerda);

//Sexta tarefa
let divDireita = document.createElement("div");
divDireita.className = "right-content";
primeiraDiv.appendChild(divDireita);