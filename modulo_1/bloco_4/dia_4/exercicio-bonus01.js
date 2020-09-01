// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function comparacaoRomanos(string) {
  let correspondente = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let valor = [];
  let novoValor = 0;
  k = 0;

  //retorna um array com os numeros correspondente a cada letra da string passada
  for (let i in string) {
    for (let j in correspondente) {
      if (string[i] == j) {
        valor[k] = correspondente[j];
      }
    }
    k += 1;
  }

  for (let l in valor) {
    if (valor[l] < valor[l + 1]) {
      valor[l + 1] = valor[l + 1] - valor[l];
    } else {
      novoValor = novoValor + valor[l];
    }
  }

  return novoValor;
}

let conversao = comparacaoRomanos("XX");
console.log(conversao);
