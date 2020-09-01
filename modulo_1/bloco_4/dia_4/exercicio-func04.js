// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function nomeMaior(array) {
  maiorNome = array[0];
  for (let i in array) {
    if (array[i].length > maiorNome.length) {
      maiorNome = array[i];
    }
  }
  return maiorNome;
}

nome = nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
console.log(nome);