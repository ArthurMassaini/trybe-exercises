const express = require('express');
const app = express();
const ingredients = require('./routes/ingredients');
const errorMiddleware = require('./middleware/error');

app.use(express.json());
app.use('/recipe', ingredients);
app.use(errorMiddleware);

const port = 3000;

app.listen(port, () => {
  console.log(`Funcionando na porta ${port}`);
});
