//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5;
let asterisco = [];

for (let i = 0; i < n; i += 1) {
  asterisco[i] = "*";
  console.log(asterisco.join(""));
}
