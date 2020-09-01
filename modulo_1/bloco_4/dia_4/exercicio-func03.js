//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.

function indiceMenorValor(array) {
  let menor = array[0];
  let menorIndice = 0;

  for (let i in array) {
    if (array[i] < menor) {
      menor = array[i];
      menorIndice = i;
    }
  }
  return menorIndice;
}

valor = indiceMenorValor([2, 3, 6, 7, 10, 0, -3]);
console.log(valor);
