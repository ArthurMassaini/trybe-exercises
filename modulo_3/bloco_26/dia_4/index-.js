const express = require('express');
const app = express();

// ---------------------------------------------------------------

app.get('/ping', (req, res) => {
  res.send({ message: 'Pong!' });
});

// ----------------------------------------------------------------

app.use(express.json());

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.send({ message: `Hello, ${name}` });
});

// ----------------------------------------------------------------

app.post('/hello', (req, res) => {
  const { name } = req.body;
  const { age } = req.body;

  age > 17
    ? res.status(200).send({ message: `Hello, ${name}` })
    : res.status(401).send({ message: `Unauthorized` });
});

// ----------------------------------------------------------------

app.put('/users/:name/:age', (req, res) => {
  const { name } = req.params;
  const { age } = req.params;

  res.send({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// ----------------------------------------------------------------

app.use((err, _req, res, _next) => {
  res.status(500).send({ error: err.message });
});

app.listen(3000);
