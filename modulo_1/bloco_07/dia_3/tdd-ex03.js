const assert = require('assert');

const addAllnumbers = (numbers) => {
  let count = 0;
  for (i = 0; i < numbers.length; i += 1) {
    count += numbers[i];
  }
  return count;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
