const express = require('express');
const data = require('../data/data');
const fs = require('fs');

const app = express();

app.post('/:id/ingredients', async (req, res) => {
  const { id } = req.params;
  const { name, ingredientes } = req.body;

  const info = { id, name, ingredientes };
  const newData = [...data, info];

  try {
    await fs.promises.writeFile(
      `${__dirname}/../data/data.json`,
      JSON.stringify(newData)
    );
    res.status(201).send({ message: 'Adcionando com sucesso!' });
  } catch (err) {
    throw new Error(err);
  }
});

app.delete('/:id/ingredients', async (req, res) => {
  const { id } = req.params;

  const flag = data.find((element) => element.id === id);
  if (!flag) res.send({ message: 'Recipe not found' });
  const newData = data.filter((element) => element.id !== id);

  try {
    await fs.promises.writeFile(
      `${__dirname}/../data/data.json`,
      JSON.stringify(newData)
    );
    res.status(204).send();
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = app;
