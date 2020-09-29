const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(
  [1, 2, 4],
  myRemove([1, 2, 3, 4], 3),
  'o array tem que ser igual a [1, 2, 4]'
);

assert.notDeepStrictEqual(
  [1, 2, 3, 4],
  myRemove([1, 2, 3, 4], 3),
  'o array tem que ser igual a [1, 2, 4]'
);

assert.deepStrictEqual(
  myRemove([1, 2, 3, 4], 5),
  [1, 2, 3, 4],
  'o array tem que ser igual a [1, 2, 3, 4]'
);

let array = [1, 2, 3, 4];
myRemove(array, 3);
assert.deepStrictEqual(
  array,
  [1, 2, 3, 4],
  'O array de parametro deve ser igual a [1, 2, 3, 4]'
);
