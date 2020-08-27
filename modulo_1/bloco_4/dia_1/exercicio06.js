// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

let nomePeca = "Peao";

switch (nomePeca.toLowerCase()) {
  case "peao":
    console.log(
      "Movimento: Apenas uma casa a frente(duas se for o primeiro movimento!) | Comer: Apenas uma casa diagonal"
    );
    break;
  case "torre":
    console.log(
      "Movimento: Inúmeras casas a frente, dos lados e para traś | Comer: Igual ao movimento"
    );
    break;
  case "cavalo":
    console.log("Movimento: Em L | Comer: Igual ao movimento");
    break;
  case "bispo":
    console.log(
      "Movimento: Inúmeras casas para qualquer diagonal | Comer: Igual ao movimento"
    );
    break;
  case "rainha":
    console.log(
      "Movimento: Inúmeras casas para qualquer direção | Comer: Igual ao movimento"
    );
    break;
  case "rei":
    console.log(
      "Movimento: Apenas uma casa para qualquer direção | Comer: Igual ao movimento"
    );
    break;
  default:
    console.log("Nome não corresponde a nenhuma peça de xadrez!");
}
