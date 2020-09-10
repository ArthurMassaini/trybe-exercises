let image = document.querySelector("img");
image.style.left = "0px";
let catBack = false;

// function catWalk() {
//   image.style.left = parseInt(image.style.left) + 10 + "px";
//   if (parseInt(image.style.left) > window.innerWidth) {
//     image.style.left = "0px";
//   }
// }

function catWalk() {
  if (catBack == false) {
    image.style.left = parseInt(image.style.left) + 10 + "px";
  }
  if (catBack == true) {
    image.style.left = parseInt(image.style.left) - 10 + "px";
  }
  if (parseInt(image.style.left) > window.innerWidth - image.width) {
    catBack = true;
  }
  if (image.offsetLeft == 0) {
    catBack = false;
  }
}

let interval = window.setInterval(catWalk, 50);
