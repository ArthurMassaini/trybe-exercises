const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const flatten = (arrays) => {
  let array;
  array = arrays.reduce((acc, element) => {
    return acc.concat(element);
  });
  return array;
};

assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);
