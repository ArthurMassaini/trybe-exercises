const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
};

//------------------------------------------------------------------------------

const myRemove = (arr, item) => {
  let newArr = [];
  arr.forEach((element) => {
    if (element !== item) {
      newArr.push(element);
    }
  });
  return newArr;
};

//------------------------------------------------------------------------------

const myRemoveWithoutCopy = (arr, item) => {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
};

//------------------------------------------------------------------------------

const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
};

module.exports = { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz };
