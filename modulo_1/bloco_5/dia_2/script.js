//------------------------------------------------------------1ªPARTE

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

//Sétima tarefa

let imagem = document.createElement("img");
imagem.className = "small-image";
imagem.src = "https://picsum.photos/200";
divEsquerda.appendChild(imagem);

//Oitava tarefa

let lista = document.createElement("ul");
for (let i = 0; i < 10; i += 1) {
  let itemLista = document.createElement("li");
  itemLista.innerHTML = i;
  lista.appendChild(itemLista);
}
divDireita.appendChild(lista);

//Nona tarefa

let titulo2 = document.createElement("h3");
let titulo3 = document.createElement("h3");
let titulo4 = document.createElement("h3");
primeiraDiv.appendChild(titulo2);
primeiraDiv.appendChild(titulo3);
primeiraDiv.appendChild(titulo4);

//------------------------------------------------------------2ª PARTE

//Tarefa 1

titulo.className = "title";
