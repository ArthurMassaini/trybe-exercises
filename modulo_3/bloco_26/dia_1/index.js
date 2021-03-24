// const readlineSync = require('readline-sync');
const inquirer = require('inquirer');

// const calculaIMC = () => {
//   const peso = readlineSync.questionFloat('Digite seu peso:\n');
//   const altura = readlineSync.questionFloat('Digite sua altura:\n');
//   return (peso / Math.pow(altura, 2)).toFixed(2);
// };

const confirmAnswerValidator = async (input) => {
  if (typeof parseFloat(input) !== 'number') {
    return 'Favor digitar um número!';
  }
  return true;
};

const defineSituacao = (imc) => {
  if (imc < 18.5) return '\nAbaixo do peso (magreza)';
  else if (imc >= 18.5 && imc <= 24.9) return '\nPeso normal';
  else if (imc >= 25 && imc <= 29.9) return '\nAcima do peso (sobrepeso)';
  else if (imc >= 30 && imc <= 34.9) return '\nObesidade grau I';
  else if (imc >= 35 && imc <= 39.9) return '\nObesidade grau II';
  else if (imc >= 40) return '\nObesidade graus III e IV';
};

const calculaIMC = async () => {
  const answer = await inquirer.prompt([
    {
      name: 'peso',
      message: 'Digite seu peso:\n',
      type: 'input',
      validate: confirmAnswerValidator,
    },
    {
      name: 'altura',
      message: 'Digite sua altura:\n',
      type: 'input',
      validate: confirmAnswerValidator,
    },
  ]);

  const imc = (answer.peso / Math.pow(answer.altura, 2)).toFixed(2);
  const situacao = defineSituacao(parseFloat(imc));
  console.log(imc, situacao);
};

calculaIMC();
