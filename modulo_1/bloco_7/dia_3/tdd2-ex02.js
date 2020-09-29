const assert = require('assert');

const removeVowels = (word) => {
  const results = [];
  let count = 0;
  for (let i = 0; i < word.length; i += 1) {
    if (
      word[i].toLowerCase() === 'a' ||
      word[i].toLowerCase() === 'o' ||
      word[i].toLowerCase() === 'i' ||
      word[i].toLowerCase() === 'e' ||
      word[i].toLowerCase() === 'u'
    ) {
      results.push(count + 1);
      count += 1;
    } else {
      results.push(word[i]);
    }
  }
  return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result);
