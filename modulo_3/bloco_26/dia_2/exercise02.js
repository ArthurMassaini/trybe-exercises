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

  firstExercise(...randomNumber)
    .then((response) => console.log(response))
    .catch((err) => console.log(err.message));
};

secondExercise();
