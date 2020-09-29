const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Retorno esperado: fizzbuzz');

assert.strictEqual(myFizzBuzz(6), 'fizz', 'Retorno esperado: fizz');

assert.strictEqual(myFizzBuzz(10), 'buzz', 'Retorno esperado: buzz');

assert.strictEqual(myFizzBuzz(1), 1, 'Retorno esperado: 1');

assert.strictEqual(myFizzBuzz('string'), false, 'Retorno esperado: false');
