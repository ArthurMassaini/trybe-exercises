const test = (param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    const array = [param1, param2, param3];

    array.forEach((element) => {
      if (typeof element !== 'number') {
        reject(new Error('Informe apenas números'));
      }
    });

    const equation = (param1 + param2) * param3;

    equation < 50 ? reject(new Error('Valor muito baixo')) : resolve(equation);
  });
};


// retorno correto: 153
test(1, 50, 3)
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message));

// retorno incorreto: 'Informe apenas números'
test(1, 'a', 3)
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message));

// retorno incorreto: 'Valor muito baixo'
test(1, 2, 3)
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message));
