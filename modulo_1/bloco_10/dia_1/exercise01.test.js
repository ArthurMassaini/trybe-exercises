const { sum, myRemove } = require('./exercise01');

describe('Function that sum two numbers values', () => {
  test('if is two numbers values, they are corretly sumed', () => {
    expect(sum(10, 2)).toEqual(12);
    expect(sum(15, 5)).toEqual(20);
    expect(sum(5, 5)).toEqual(10);
  });

  test('if is not a number value, throw a Error massage', () => {
    expect(() => sum(10, '5')).toThrow();
    expect(() => sum(10, {})).toThrow();
    expect(() => sum(10, [])).toThrow();
  });
});

//-------------------------------------------------------------------------

describe('Function that return the array minus the second value on parameter', () => {
  test('if the returned array is the expected', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  test('if the array passed on parameter have not changed', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 3);
    expect(array).toEqual([1, 2, 3, 4]);
  });
});
