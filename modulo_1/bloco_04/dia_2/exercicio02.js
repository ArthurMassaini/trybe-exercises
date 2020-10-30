// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let i in numbers) {
  soma = soma + numbers[i];
}

console.log("A soma dos elementos desse array é " + soma);
