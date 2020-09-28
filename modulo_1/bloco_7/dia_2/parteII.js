const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//-----------------------------------------------------------------------Exercício 01

const adicionaTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
};
adicionaTurno(lesson2, 'turno', 'manhã');

//-----------------------------------------------------------------------Exercício 02

const listaChaves = (objeto) => {
  return Object.keys(objeto);
};
const chaves = listaChaves(lesson3);

//-----------------------------------------------------------------------Exercício 03

const tamObjeto = (objeto) => {
  let count = 0;
  for (let i in objeto) {
    count += 1;
  }
  return count;
};
const tamanho = tamObjeto(lesson1);

//-----------------------------------------------------------------------Exercicio 04

const listaValores = (objeto) => {
  return Object.values(objeto);
};
const valores = listaValores(lesson2);

//-----------------------------------------------------------------------Exercicio 05

const criaObjeto = (objeto1, objeto2, objeto3) => {
  const allLessons = {};
  const newLesson1 = Object.assign({}, objeto1);
  const newLesson2 = Object.assign({}, objeto2);
  const newLesson3 = Object.assign({}, objeto3);

  allLessons['lesson1'] = newLesson1;
  allLessons['lesson2'] = newLesson2;
  allLessons['lesson3'] = newLesson3;
  return allLessons;
};
let objetoNovo = criaObjeto(lesson1, lesson2, lesson3);

//-----------------------------------------------------------------------Exercício 06

const qtdAlunos = (objeto) => {
  let quantidade = 0;
  for (let i in objeto) {
    quantidade += objeto[i].numeroEstudantes;
  }
  return quantidade;
};
const quantidadeAlunos = qtdAlunos(objetoNovo);

//-----------------------------------------------------------------------Exercício 07

const getValueByNumber = (objeto, posicao) => {
  const array = Object.values(objeto);
  return array[posicao];
};
let posicao = getValueByNumber(lesson1, 0);

//-----------------------------------------------------------------------Exercício 08

const verifyPair = (objeto, chave, valor) => {
  let array = Object.entries(objeto);
  let bool;
  for (let i in array) {
    if (array[i][0] === chave && array[i][1] === valor) {
      bool = true;
      break;
    } else {
      bool = false;
    }
  }
  return bool;
};

let verifica1 = verifyPair(lesson3, 'turno', 'noite');
let verifica2 = verifyPair(lesson3, 'materia', 'Maria Clara');
