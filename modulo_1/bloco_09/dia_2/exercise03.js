const promise = new Promise((resolve, reject) => {
  const array = [];
  for (i = 1; i <= 10; i += 1) {
    const random = Math.floor(Math.random() * 51);
    array.push(random);
  }
  const soma = array
    .map((element) => Math.pow(element, 2))
    .reduce((acc, curr) => acc + curr);

  soma < 8000
    ? resolve(soma)
    : reject('É mais de oito mil! Essa promise deve estar quebrada!');
});

promise
  .then((soma) => {
    const array = [2, 3, 5, 10];
    const arrayDivisao = array.map((element) => soma / element);
    return arrayDivisao;
  })
  .then((arrayDivisao) => {
    const result = arrayDivisao.reduce((acc, curr) => curr + acc);
    return console.log(result);
  })
  .catch((erro) => console.log(erro));
