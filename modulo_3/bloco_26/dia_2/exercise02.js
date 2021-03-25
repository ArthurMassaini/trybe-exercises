const firstExercise = (param1, param2, param3) => {
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

const getRandomNumber = () => {
  return Math.round(Math.random() * 100);
};

const secondExercise = () => {
  const randomNumber = [
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ];

  firstExercise(randomNumber[0], randomNumber[1], randomNumber[2])
    .then((response) => console.log(response))
    .catch((err) => console.log(err.message));
};

secondExercise();
