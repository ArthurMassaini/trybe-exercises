const { findUserById, getUserName } = require('./exercise02-03');

describe('Verify if the function return the correct answer using promises', () => {
  it('should be equal Mark when the ID is 4', () => {
    expect.assertions(1);
    return getUserName(4).then((user) => {
      expect(user).toBe('Mark');
    });
  });

  it('should not be equal Paul when the ID is 4', () => {
    expect.assertions(1);
    return getUserName(4).then((user) => {
      expect(user).not.toBe('Paul');
    });
  });

  it('should appear an error when de ID is not found', () => {
    expect.assertions(1);
    return findUserById(6).catch((error) => {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    });
  });
});

//-----------------------------------------------------------------------

describe('Verify if the function return the correct answer using async await', () => {
  it('should be equal Mark when the ID is 4', async () => {
    expect.assertions(1);
    const user = await getUserName(4);
    expect(user).toBe('Mark');
  });

  it('should not be equal Paul when the ID is 4', async () => {
    expect.assertions(1);
    const user = await getUserName(4);
    expect(user).not.toBe('Paul');
  });

  it('should appear an error when de ID is not found', async () => {
    expect.assertions(1);
    try {
      await findUserById(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    }
  });
});
