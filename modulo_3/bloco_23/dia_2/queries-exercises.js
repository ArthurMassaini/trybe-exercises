// -------------------------------------------- Exercicio 01

db.superheroes.findOne();

// -------------------------------------------- Exercicio 02

db.superheroes.find({ 'aspects.height': { $lt: 180 } });

// -------------------------------------------- Exercicio 03

db.superheroes.find({ 'aspects.height': { $lt: 180 } }).countDocuments();

// -------------------------------------------- Exercicio 04

db.superheroes.find({ 'aspects.height': { $lte: 180 } }).countDocuments();

// -------------------------------------------- Exercicio 05

db.superheroes.findOne({ 'aspects.height': { $gte: 200 } });

// -------------------------------------------- Exercicio 06

db.superheroes.find({ 'aspects.height': { $gte: 200 } }).countDocuments();

// -------------------------------------------- Exercicio 07

db.superheroes.find({ 'aspects.eyeColor': 'green' });

// -------------------------------------------- Exercicio 08

db.superheroes.find({ 'aspects.eyeColor': 'blue' }).countDocuments();

// -------------------------------------------- Exercicio 09

db.superheroes.find({ 'aspects.hairColor': { $in: ['No Hair', 'black'] } });

// -------------------------------------------- Exercicio 10

db.superheroes
  .find({ 'aspects.hairColor': { $in: ['No Hair', 'black'] } })
  .countDocuments();

// -------------------------------------------- Exercicio 11

db.superheroes
  .find({ 'aspects.hairColor': { $nin: ['No Hair', 'black'] } })
  .countDocuments();

// -------------------------------------------- Exercicio 12

db.superheroes.find({ 'aspects.height': { $not: { $gt: 180 } } });

// -------------------------------------------- Exercicio 13

db.superheroes.find({
  $and: [
    {
      race: { $ne: 'Human' },
    },
    {
      'aspects.height': { $not: { $gt: 180 } },
    },
  ],
});

// -------------------------------------------- Exercicio 14

db.superheroes.find({
  $and: [
    {
      publisher: 'Marvel Comics',
    },
    {
      'aspects.height': { $in: [180, 200] },
    },
  ],
});

// -------------------------------------------- Exercicio 15

db.superheroes.find({
  $and: [
    {
      'aspects.weight': { $lte: 100, $gt: 80 },
    },
    {
      race: { $in: ['Human', 'Mutant'] },
    },
    {
      publisher: { $ne: 'DC Comics' },
    },
  ],
});

// -------------------------------------------- Exercicio 16

db.superheroes.find({ race: { $exists: false } }).countDocuments();

// -------------------------------------------- Exercicio 17

db.superheroes
  .find({ 'aspects.hairColor': { $exists: true } })
  .countDocuments();

// -------------------------------------------- Exercicio 18

db.superheroes.deleteOne({ publisher: 'Sony Pictures' });

// -------------------------------------------- Exercicio 19

db.superheroes.deleteMany({ publisher: 'George Lucas' });
