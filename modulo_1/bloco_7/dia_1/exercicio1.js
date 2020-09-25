// function fat(num) {
//   let fatorial = 0;
//   for (let i = num - 1; i > 0; i -= 1) {
//     fatorial += num * i;
//   }
//   return console.log(fatorial);
// }

const calculoFatorial = num => {
  let fatorial = num;
  for (let i = num - 1; i > 0; i -= 1) {
    fatorial *= i;
  }
  return console.log(fatorial);
};

calculoFatorial(6);
