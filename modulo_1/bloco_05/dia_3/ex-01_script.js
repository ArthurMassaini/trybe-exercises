let button = document.querySelector("#lib-button");

let textBox1 = document.querySelector("#noun");
let textBox2 = document.querySelector("#adjective");
let textBox3 = document.querySelector("#person");

let story = document.querySelector("#story");

function makeMadLib() {
  story.innerHTML =
    textBox3.value +
    " realemnte gosta de " +
    textBox1.value +
    " " +
    textBox2.value;
}

button.addEventListener("click", makeMadLib);
