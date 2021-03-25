const firstExercise = require('./exercise01');

const getRandomNumber = () => {
  return Math.round(Math.random() * 100);
};

const thirdExercise = async () => {
  const randomNumber = [
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ];

  try {
    const response = await firstExercise(...randomNumber);
    return console.log(response);
  } catch (err) {
    return console.log(err.message);
  }
};

thirdExercise();
