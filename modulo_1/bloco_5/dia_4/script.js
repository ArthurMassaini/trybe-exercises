let paragraph = document.querySelector(".paragraph");

let button1 = document.querySelector(".button-bgc");
let colorBox1 = document.querySelector("#box1");

button1.addEventListener("click", function () {
  let corFundo = colorBox1.value;
  paragraph.style.backgroundColor = corFundo;
});

let button2 = document.querySelector(".button-tc");
let colorBox2 = document.querySelector("#box2");

button2.addEventListener("click", function () {
  let corTexto = colorBox2.value;
  paragraph.style.color = corTexto;
});

let button3 = document.querySelector(".button-sl");
let textBox1 = document.querySelector("#box3");

button3.addEventListener("click", function () {
  let newLineHeight = textBox1.value;
  paragraph.style.lineHeight = parseInt(newLineHeight) + "px";
});

let button4 = document.querySelector(".button-ft");
let textBox2 = document.querySelector("#box4");

button4.addEventListener("click", function () {
  let newFontType = textBox2.value;
  paragraph.style.fontFamily = newFontType;
});
