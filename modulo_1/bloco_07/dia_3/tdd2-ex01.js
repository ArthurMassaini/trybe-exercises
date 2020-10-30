const assert = require('assert');

const greetPeople = (people) => {
  for (let i = 0; i < people.length; i += 1) {
    people[i] = `Hello ${people[i]}`;
  }
  return people;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
