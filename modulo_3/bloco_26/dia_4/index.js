const express = require('express');
const app = express();
const data = require('./simpsons.json');

// ----------------------------------------------------------------

// app.get('/simpsons', (req, res, next) => {
//   res.status(200).send({ message: 'status 200 OK' });
// });

// ----------------------------------------------------------------

app.get('/simpsons', (req, res) => {
  let message = '';
  data.forEach((element) => {
    message += `${element.name}, `;
  });
  res.status(200).send({ message });
});

// ----------------------------------------------------------------

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;

  const findData = data.find((element) => element.id === id);
  res.status(200).send({ name: findData.name });
});

// ----------------------------------------------------------------

app.post('/simpsons', (req, res) => {
  const { id } = req.body;
  const { name } = req.body;

  const allIds = data.map((element) => element.id);

  if (allIds.includes(id)) {
    res.status(400).send({ message: 'Id deve ser único' });
  } else {
    data.push({ id, name });
    res.status(200).send({ message: 'Personagem Criado!' });
  }
});

// ----------------------------------------------------------------

app.use((err, _req, res, _next) => {
  res.status(500).send({ error: err.message });
});

app.listen(3000);
