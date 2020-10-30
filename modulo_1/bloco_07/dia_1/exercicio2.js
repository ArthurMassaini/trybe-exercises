// function longestWord(string) {
//   const array = string.split(' ');
//   let maior = array[0].length;
//   let palavra = array[0];
//   for (let i = 1; i < array.length; i += 1) {
//     if (maior < array[i].length) {
//       maior = array[i].length;
//       palavra = array[i];
//     }
//   }
//   return palavra;
// }

const longestWord = (string) => {
  const array = string.split(' ');
  let maior = array[0].length;
  let palavra = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (maior < array[i].length) {
      maior = array[i].length;
      palavra = array[i];
    }
  }
  return palavra;
};

const string = 'Assim voce mata o pai';
console.log(longestWord(string));
