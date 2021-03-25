const fs = require('fs');

const printIdAndName = () => {
  fs.promises
    .readFile('./simpsons.json', 'utf-8')
    .then((content) => JSON.parse(content))
    .then((data) => {
      data.forEach(({ id, name }) => {
        console.log(`${id} - ${name}`);
      });
    });
};
// printIdAndName();

const infoCharacter = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject(new Error('id não encontrado'));

    fs.promises
      .readFile('./simpsons.json', 'utf-8')
      .then((content) => JSON.parse(content))
      .then((data) => {
        const findName = data.find((element) => element.id === id.toString());
        resolve(findName);
      });
  });
};
// infoCharacter(1)
//   .then((response) => console.log(`O nome do personagem é: ${response.name}`))
//   .catch((err) => console.log(err.message));

const removeIdTenAndSix = async () => {
  const responseRaw = await fs.promises.readFile('./simpsons.json', 'utf-8');
  const response = JSON.parse(responseRaw);
  const filteredData = response.filter(
    (element) => element.id !== '10' && element.id !== '6'
  );

  fs.promises.writeFile('./simpsons.json', JSON.stringify(filteredData));
};
// removeIdTenAndSix();

const createNewFile = async () => {
  const responseRaw = await fs.promises.readFile('./simpsons.json', 'utf-8');
  const response = JSON.parse(responseRaw);
  const slicedArray = response.slice(0, 4);

  fs.promises.writeFile('./simpsonFamily.json', JSON.stringify(slicedArray));
};
// createNewFile();

const createNewCharacter = () => {
  fs.promises
    .readFile('./simpsonFamily.json', 'utf-8')
    .then((content) => JSON.parse(content))
    .then((data) => {
      data.push({
        id: '5',
        name: 'Nelson Muntz',
      });

      fs.promises.writeFile('./simpsonFamily.json', JSON.stringify(data));
    });
};
// createNewCharacter();

const swapCharacter = async () => {
  const responseRaw = await fs.promises.readFile(
    './simpsonFamily.json',
    'utf-8'
  );
  const response = JSON.parse(responseRaw);

  const filteredResponse = response.filter((element) => element.id !== 5);
  filteredResponse.push({ id: '5', name: 'Maggie Simpson' });

  fs.promises.writeFile(
    './simpsonFamily.json',
    JSON.stringify(filteredResponse)
  );
};
// swapCharacter();
