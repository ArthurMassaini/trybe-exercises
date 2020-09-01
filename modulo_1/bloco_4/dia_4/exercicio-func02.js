// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function indiceMaiorValor(array) {
  let maior = array[0];
  let maiorIndice = 0;

  for (let i in array) {
    if (array[i] > maior) {
      maior = array[i];
      maiorIndice = i;
    }
  }
  return maiorIndice;
}

valor = indiceMaiorValor([2, 3, 6, 7, 10, 1]);
console.log(valor);
