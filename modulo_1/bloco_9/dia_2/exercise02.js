const promise = new Promise((resolve, reject) => {
  const array = [];
  for (i = 1; i <= 10; i += 1) {
    const random = Math.floor(Math.random() * 51);
    array.push(random);
  }
  const soma = array
    .map((element) => Math.pow(element, 2))
    .reduce((acc, curr) => acc + curr);

  soma > 8000 ? resolve(soma) : reject(soma);
});

promise
  .then((soma) => console.log(`SOMA: ${soma}, É DE MAIS DE 8 MIL!`))
  .catch((soma) => console.log(`SOMA: ${soma}, FRACO, MENOR QUE 8 MIL!`));
