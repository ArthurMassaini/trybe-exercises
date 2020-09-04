/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 //Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 //Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 //Crie uma função que mude a cor do quadrado vermelho para branco.
 //Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

let elemento1 = document.getElementsByTagName("p");
elemento1[0].innerText =
  "Eu me vejo empregado em uma empresa de tecnologia de sucesso!";

let elemento2 = document.getElementsByClassName("main-content");
elemento2[0].style.backgroundColor = "rgb(76,164,109)";

let elemento3 = document.getElementsByClassName("center-content");
elemento3[0].style.backgroundColor = "white";

let elemento4 = document.getElementById("titulo");
elemento4.innerHTML = "Exercício 5.1 - Javascript"; 

