function criaH1() {
  let body = document.querySelector("body");

  let titulo = document.createElement("h1");

  return body.appendChild(titulo);
}
criaH1();

function criaDiv() {
  let body = document.querySelector("body");
  let primeiraDiv = document.createElement("div");
  primeiraDiv.className = "main-content";
  return body.appendChild(primeiraDiv);
}
criaDiv();
