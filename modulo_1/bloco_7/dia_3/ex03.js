const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepStrictEqual(
  myRemoveWithoutCopy([1, 2, 3, 4], 3),
  [1, 2, 4],
  'O array esperado é [1, 2, 4]'
);

assert.notDeepStrictEqual(
  myRemoveWithoutCopy([1, 2, 3, 4], 3),
  [1, 2, 3, 4],
  'O array esperado é [1, 2, 4]'
);

assert.deepStrictEqual(
  myRemoveWithoutCopy([1, 2, 3, 4], 5),
  [1, 2, 3,4],
  'O array esperado é [1, 2, 3, 4]'
);

let array = [1, 2, 3, 4];
myRemoveWithoutCopy(array, 3);
assert.deepStrictEqual(
  array,
  [1, 2, 4],
  'O array do parametro esperado é [1, 2, 4] depois das alteracoes'
);
