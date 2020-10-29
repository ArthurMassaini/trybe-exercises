const { getRepos } = require('./exercise04');

describe('Retrieving a array of repos from Github API', () => {
  it('should not be able to find sd-01-week4-5-project-todo-list', () => {
    expect.assertions(1);
    return expect(
      getRepos('https://api.github.com/users/tryber/repos'),
    ).resolves.not.toContain('sd-01-week4-5-project-todo-list');
  });

  it('should not be able to find sd-01-week4-5-project-meme-generator', () => {
    expect.assertions(1);
    return expect(
      getRepos('https://api.github.com/users/tryber/repos'),
    ).resolves.not.toContain('sd-01-week4-5-project-meme-generator');
  });
});
