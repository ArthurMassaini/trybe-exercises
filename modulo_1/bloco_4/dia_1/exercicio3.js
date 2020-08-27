//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 10;
let b = 3;
let c = 4;

if (a > b && a > c) {
  console.log("O maior é o valor a: " + a);
} else if (b > a && b > c) {
  console.log("O maior é o valor b: " + b);
} else if (c > a && c > b) {
  console.log("O maior é o valor c: " + c);
} else if (a > c && a == b) {
  console.log("Os maiores são os valores de a e b: " + a);
} else if (a > b && a == c) {
  console.log("Os maiores são os valores de a e c: " + a);
} else if (b > a && b == c) {
  console.log("Os maiores são os valores de b e c: " + b);
} else {
  console.log("Os três são iguais");
}
