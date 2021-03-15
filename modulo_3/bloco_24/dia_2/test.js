db.movies.updateMany(
  {
    title: 'Batman',
  },
  {
    $push: {
      'cast.$[element].actor': {
        $each: ['Michael Keaton', 'Val Kilmer', 'George Clooney'],
        $sort: 1,
      },
    },
  },
  { arrayFilters: [{ 'element.character': 'Batman' }] }
);
