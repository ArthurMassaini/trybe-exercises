const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

//arrayAverage = [7.8 , 9.2 , 8.8]

const calcMedia = (acc, current, index, array) => {
  return acc + current / array.length;
};

const notaFinal = (acc, current) => {
  let media;
  media = parseFloat(current.reduce(calcMedia, 0).toFixed(1));
  acc.push(media);
  return acc;
};

const studentAverage = (alunos, notas) => {
  let arrayAverage;
  arrayAverage = notas.reduce(notaFinal, []);

  let array = alunos.map((element, index) => {
    return {
      name: element,
      average: arrayAverage[index],
    };
  });
  return array;
};

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(alunos, notas), expected);
