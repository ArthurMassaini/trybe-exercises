let paragraph = document.querySelector(".paragraph");

let button1 = document.querySelector(".button-bgc");
let colorBox1 = document.querySelector("#box1");

button1.addEventListener("click", function () {
  let corFundo = colorBox1.value;
  paragraph.style.backgroundColor = corFundo;
  localStorage.setItem("cor-fundo", corFundo);
});

let button2 = document.querySelector(".button-tc");
let colorBox2 = document.querySelector("#box2");

button2.addEventListener("click", function () {
  let corTexto = colorBox2.value;
  paragraph.style.color = corTexto;
  localStorage.setItem("cor-texto", corTexto);
});

let button3 = document.querySelector(".button-sl");
let textBox1 = document.querySelector("#box3");

button3.addEventListener("click", function () {
  let newLineHeight = textBox1.value;
  paragraph.style.lineHeight = parseInt(newLineHeight) + "px";
  localStorage.setItem("espaco-linha", newLineHeight);
});

let button4 = document.querySelector(".button-ft");
let textBox2 = document.querySelector("#box4");

button4.addEventListener("click", function () {
  let newFontType = textBox2.value;
  paragraph.style.fontFamily = newFontType;
  localStorage.setItem("tipo-fonte", newFontType);
});

if (localStorage.length != 0) {
  let corFundo = localStorage.getItem("cor-fundo");
  paragraph.style.backgroundColor = corFundo;

  let corTexto = localStorage.getItem("cor-texto");
  paragraph.style.color = corTexto;

  let newLineHeight = localStorage.getItem("espaco-linha");
  paragraph.style.lineHeight = newLineHeight + "px";

  let newFontType = localStorage.getItem("tipo-fonte");
  paragraph.style.fontFamily = newFontType;
}
