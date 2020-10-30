// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let array = [];
let arrayDivisao = [];

for (let i = 0; i < 25; i += 1) {
  array.push(i + 1);
  arrayDivisao[i] = array[i] / 2;
}

console.log(arrayDivisao);
