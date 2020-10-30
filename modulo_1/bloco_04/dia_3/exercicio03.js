//Agora inverta o lado do triângulo.

let n = 5;
let asterisco = [];

for (let i = 1; i <= n; i += 1) {
  asterisco[i - 1] = " ";
  if (i == n) {
    asterisco[i - 1] = "*";
  }
}

for (let j = 1; j <= n; j += 1) {
  asterisco.splice(n - j, 1);
  asterisco.push("*");
  console.log(asterisco.join(""));
}
