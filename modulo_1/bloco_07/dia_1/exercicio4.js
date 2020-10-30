const substituiX = (string) => {
  const stringDeterminada = 'Tryber x aqui!';
  let array = stringDeterminada.split(' ');
  let palavra;

  for (let i in array) {
    if (array[i].toLowerCase() === 'x') {
      array[i] = string;
      palavra = array[i];
      break;
    }
  }
  return `Tryber ${palavra} aqui!`;
};

const stringTrybe = substituiX('Arthur');

let skills = ['Terminal', 'Git', 'HTML', 'CSS', 'JS'];

const ordenaSkills = (stringTrybe) => {
  skills.sort();
  const fraseFinal = `${stringTrybe} Minhas cinco principais habilidades são:
  •${skills[0]}
  •${skills[1]}
  •${skills[2]}
  •${skills[3]}
  •${skills[4]}
    #goTRYBE`;
  return fraseFinal;
};

console.log(ordenaSkills(stringTrybe));
