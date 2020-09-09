//TAREFA 01

let createButton = document.createElement("button");
createButton.className = "class-button1";

let divButton = document.querySelector(".tarefa1");
divButton.appendChild(createButton);

let button1 = document.querySelector(".class-button1");
button1.innerHTML = "Click on me";

button1.addEventListener("click", function () {
  alert("Voce clicou no botão!");
});

//TAREFA 02

let productPrice = 59.99;
let discount = 0.3;

let button2 = document.querySelector(".class-button2");

button2.addEventListener("click", function () {
  let result = productPrice * discount;
  alert("Desconto de " + result);
});
