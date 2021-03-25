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
    const response = await firstExercise(
      randomNumber[0],
      randomNumber[1],
      randomNumber[2]
    );
    return console.log(response);
  } catch (err) {
    return console.log(err.message);
  }
};

thirdExercise();
