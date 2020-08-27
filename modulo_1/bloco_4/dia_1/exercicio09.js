// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. 
// Caso contrário, ele retorna false.
// Bonus: use somente um if.

let pNum = 3;
let sNum = 4;
let tNum = 4;

if (pNum % 2 != 0 || sNum % 2 != 0 || tNum % 2 != 0) {
  console.log("Pelo menos algum número é ímpar!");
} else {
  console.log("Nenhum é ímpar!");
}
