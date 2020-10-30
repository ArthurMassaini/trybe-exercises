// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.
// Valor de teste: "trybe" e "be"
// Valor esperado no retorno da função: true
// verificaFimPalavra("trybe", "be");
// Retorno esperado: true
// verificaFimPalavra("joaofernando", "fernan");
// Retorno esperado: false

function verificaFimPalavra(word, ending) {
  let count = 0;
  let i = 0;

  for (let j = word.length - ending.length; j < word.length; j += 1) {
    if (ending[i] === word[j]) {
      count += 1;
    }
    i++;
  }

  if (count === ending.length) {
    return true;
  } else {
    return false;
  }
}

let status = verificaFimPalavra("trybe", "be");

console.log(status);
