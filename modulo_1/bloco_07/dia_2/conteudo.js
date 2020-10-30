const mostraObjeto = (object, key, value) => {
  object[key] = value;
  return console.log(object);
};

const object = {};
const key = 'nome';
const value = 'Arthur';

mostraObjeto(object, key, value);

//----------------------------------------------------------------//

const exibeHabilidades = (student) => {
  const array = Object.keys(student);
  for (let i in array) {
    let resultado = `${array[i]}, Nível: ${student[array[i]]}`;
    console.log(resultado);
  }
};

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

exibeHabilidades(student);
