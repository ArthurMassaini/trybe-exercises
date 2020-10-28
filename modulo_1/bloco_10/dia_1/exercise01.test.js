const { division, sum } = require('./exercise01');

test('divide two values', () => {
  expect(division(10, 2)).toBe(5);
});

test('sum two values', () => {
  expect(sum(10, 2)).toEqual(12);
});
