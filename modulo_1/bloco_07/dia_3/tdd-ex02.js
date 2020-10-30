const assert = require('assert');

const wordLengths = (words) => {
  let arrayLength = [];
  for (let i = 0; i < words.length; i += 1) {
    arrayLength.push(words[i].length);
  }
  return arrayLength;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];
const output = wordLengths(words);

assert.strictEqual(typeof wordLengths, 'function');
assert.deepStrictEqual(output, expected);
