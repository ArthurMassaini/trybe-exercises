var personName = "";

function complainMessage() {
  alert("I told you not to do that " + personName);
}

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  } else {
    body.className = "";
  }
}

function finishTheStory(evento) {
  document.getElementById("story").innerHTML =
    "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}

let inputNome = document.querySelector("#name");
personName = inputNome.value;
inputNome.addEventListener("input", complainMessage);

let buttonDark = document.querySelector(".button-dark");
buttonDark.addEventListener("click", goDark);

let buttonStory = document.querySelector(".button-story");
buttonStory.addEventListener("click", finishTheStory);

let buttonMusic = document.querySelector(".button-music");
buttonMusic.addEventListener("click", typeAndScream);
