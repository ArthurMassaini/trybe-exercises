const { uppercase } = require('./exercise01');

describe('Function that transform a string to uppercase', () => {
  it('should transform the string arthur into ARTHUR', () => {
    function callback(data) {
      expect(data).toBe('ARTHUR');
    }

    uppercase('arthur', callback);
  });
});
