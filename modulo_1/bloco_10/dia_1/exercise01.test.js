const { sum } = require('./exercise01');

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
