const fs = require('fs');

const createFiles = () => {
  const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  array.forEach((element, index) => {
    fs.promises.writeFile(`file${index}.txt`, `${element}`);
  });
};
// createFiles();

const readingAll = (fileName) => {
  return fs.promises.readFile(fileName, 'utf-8');
};

Promise.all([
  readingAll('./file0.txt'),
  readingAll('./file1.txt'),
  readingAll('./file2.txt'),
  readingAll('./file3.txt'),
  readingAll('./file4.txt'),
]).then((content) => {
  const joined = content.join(' ');

  fs.promises.writeFile(`fileAll.txt`, joined);
});
