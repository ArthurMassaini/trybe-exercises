//4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let metade = Math.trunc(n / 2);

for (let i = 1; i <= n; i += 2) {
  console.log(" ".repeat(metade--) + "*".repeat(i));
}
