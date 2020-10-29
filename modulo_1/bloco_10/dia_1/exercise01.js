const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
};

//------------------------------------------------------------------------------

function myRemove(arr, item) {
  let newArr = [];
  arr.forEach((element) => {
    if (element !== item) {
      newArr.push(element);
    }
  });
  return newArr;
}

module.exports = { sum, myRemove };
