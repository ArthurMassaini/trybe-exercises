// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somatorio(num) {
  soma = 0;
  for (let i = 1; i <= num; i += 1) {
    soma += i;
  }
  return soma;
}

valor = somatorio(5);
console.log(valor);
