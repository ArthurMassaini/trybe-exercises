use('agg_example');
db.clients.aggregate([
  { $match: { State: 'Florida' } },
  {
    $lookup: {
      from: 'transactions',
      localField: 'name',
      foreignField: 'to',
      as: 'transacoes_recebidas',
    },
  },
  { $limit: 4 },
]);
