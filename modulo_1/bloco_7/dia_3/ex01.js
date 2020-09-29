const assert = require('assert');

const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
};

assert.ok(sum(4, 5) === 9, 'A soma de 4 + 5 = 9');

assert.ok(sum(0, 0) === 0, 'A soma de 4 + 5 = 9');

assert.ok(sum(4, '5') === 9);

