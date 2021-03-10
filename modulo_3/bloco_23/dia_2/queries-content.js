// exercicios do conteudo PARTE 1

db.restaurants
  .find({ borough: { $in: ['Queens', 'Staten Island', 'Bronx'] } })
  .count();

db.restaurants.find({ cuisine: { $ne: 'American' } }).count();

db.restaurants.find({ rating: { $gte: 8 } }).count();

db.restaurants.find({ rating: { $lt: 4 } }).count();

db.restaurants.find({ rating: { $nin: [5, 6, 7] } }).count();

// exercicios do conteudo PARTE 2

db.restaurants.find({ rating: { $not: { $lt: 5 } } }).count();

db.restaurants
  .find({ $or: [{ rating: { $gt: 6 } }, { borough: 'Brooklyn' }] })
  .count();

db.restaurants
  .find({
    $and: [
      { rating: { $gt: 4 } },
      { borough: { $in: ['Queens', 'Staten Island', 'Bronx'] } },
    ],
  })
  .count();

db.restaurants
  .find({
    $nor: [{ rating: 4 }, { cuisine: 'American' }],
  })
  .count();

db.restaurants
  .find({
    $and: [
      { $or: [{ rating: { $gt: 6 } }, { rating: { $lt: 10 } }] },
      {
        $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }],
      },
    ],
  })
  .count();

// exercicios do conteudo PARTE 3

db.restaurants.find().sort({ name: 1 });

db.restaurants.find().sort({ rating: -1 });

// exercicios do conteudo PARTE 4

db.restaurants.deleteOne({ cuisine: 'Ice Cream, Gelato, Yogurt, Ices' });

db.restaurants.deleteMany({ cuisine: 'American' });