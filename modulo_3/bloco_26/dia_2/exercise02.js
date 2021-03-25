const firstExercise = require('./exercise01');

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
