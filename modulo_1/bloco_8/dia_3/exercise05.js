const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const count1 = (acc2, current2) => {
  if (current2.toLowerCase() === 'a') {
    return acc2 + 1;
  } else {
    return acc2;
  }
};

const count2 = (acc, current) => {
  let tam;
  tam = current.split('').reduce(count1, 0);

  return acc + tam;
};

const containsA = (names) => names.reduce(count2, 0);

assert.deepStrictEqual(containsA(names), 20);
