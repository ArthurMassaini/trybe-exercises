//6- Faça um programa que diz se um número definido numa variável é primo ou não.

let num = 11;
let count = 0;

for (let i = 1; i <= num; i += 1) {
  if (num % i === 0) {
    count += 1;
  }
}

if(count === 2){
    console.log("Esse número é primo");
}else{
    console.log("Esse número não é primo");
}