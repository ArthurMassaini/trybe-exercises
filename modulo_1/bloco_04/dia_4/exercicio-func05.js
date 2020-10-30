// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function maiorOcorrencia(array) {
  let count = 0;
  let maiorCount = 0;

  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = 1; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        count += 1;
      }
      if (j == array.length - 1) {
        if (count > maiorCount) {
          maiorCount = count;
          count = 0;
          valorMaisOcorrencia = array[i];
        }
      }
    }
  }

  return valorMaisOcorrencia;
}

valor = maiorOcorrencia([2, 3, 2, 5, 8, 2, 3]);

console.log(valor);
