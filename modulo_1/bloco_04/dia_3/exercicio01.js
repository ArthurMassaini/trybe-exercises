// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1,
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;
let asterisco = [];

for (let i = 0; i < n; i += 1) {
  asterisco[i] = "*";
}
for (let i = 0; i < n; i += 1) {
  console.log(asterisco.join(""));
}
