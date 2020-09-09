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

//TAREFA 03

let createImage = document.createElement("img");
createImage.className = "class-image";

let divMain = document.querySelector(".main-div");
divMain.appendChild(createImage);

let image = document.querySelector(".class-image");
image.src =
  "https://leianoticias.com.br/wp-content/uploads/2019/12/pessoasnapraia-43712373f2c106be93ecb080e125d4bb-1200x600-1.jpg";

image.addEventListener("mouseover", function (evento) {
  image.src =
    "https://esquerdaonline.com.br/wp-content/uploads/2020/04/terra-57aa8fa715aa3110337592a96d1dadb8-1200x600-1.jpg";
  console.log(evento.type);
});

image.addEventListener("mouseout", function (evento) {
  image.src =
    "https://leianoticias.com.br/wp-content/uploads/2019/12/pessoasnapraia-43712373f2c106be93ecb080e125d4bb-1200x600-1.jpg";
  console.log(evento.type);
});
