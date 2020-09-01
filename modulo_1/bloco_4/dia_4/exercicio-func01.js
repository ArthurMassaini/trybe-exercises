// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome("arara");
// Retorno esperado: true
// verificaPalindrome("desenvolvimento");
// Retorno esperado: false

function verificaPalindrome(palavra) {
  let palavraInvertida = "";

  for (let i = palavra.length; i > 0; i -= 1) {
    palavraInvertida = palavraInvertida + palavra[i - 1];
  }

  if (palavraInvertida.toLowerCase() === palavra.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

status = verificaPalindrome("Arara");
console.log(status);
