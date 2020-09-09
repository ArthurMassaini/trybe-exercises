function squareNumber(num) {
  console.log("ta aqui");
  return num * num;
}

function halfNumber(num) {
  return num / 2;
}

function percentOf(num1, num2) {
  return (num1 / num2) * 100;
}

function areaOfCircle(radius) {
  return (Math.PI * squareNumber(radius)).toFixed(2);
}

function doCrazyStuff(num) {
  let half = halfNumber(num);
  let squared = squareNumber(half);
  let area = areaOfCircle(squared);
  let result = percentOf(squared, area);
}

let button1 = document.querySelector("#square-button");

button1.addEventListener("click", function () {
  let textBox1 = document.querySelector("#square-input");
  result = squareNumber(textBox1.value);
  let resultDiv = document.querySelector("#solution");
  resultDiv.innerHTML = result;
});

let button2 = document.querySelector("#half-button");

button2.addEventListener("click", function () {
  let textBox2 = document.querySelector("#half-input");
  result = halfNumber(textBox2.value);
  let resultDiv = document.querySelector("#solution");
  resultDiv.innerHTML = result;
});

let button3 = document.querySelector("#percent-button");

button3.addEventListener("click", function () {
  let textBox3 = document.querySelector("#percent1-input");
  let textBox4 = document.querySelector("#percent2-input");
  result = percentOf(textBox3.value, textBox4.value);
  let resultDiv = document.querySelector("#solution");
  resultDiv.innerHTML = result + "%";
});

let button4 = document.querySelector("#area-button");

button4.addEventListener("click", function () {
  let textBox5 = document.querySelector("#area-input");
  result = areaOfCircle(textBox5.value);
  let resultDiv = document.querySelector("#solution");
  resultDiv.innerHTML = result;
});
