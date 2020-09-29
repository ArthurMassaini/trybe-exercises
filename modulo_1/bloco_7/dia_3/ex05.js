const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.notDeepStrictEqual(obj1, obj3, 'Obj1 e obj3 não são identicos');

assert.deepStrictEqual(obj1, obj2, 'Obj1 e obj2 são identicos');

assert.notDeepStrictEqual(obj2, obj3, 'Obj2 e obj3 não são identicos');
