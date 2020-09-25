const button = document.querySelector('#button');
const span = document.querySelector('span');
let clickCount = 0;

button.addEventListener('click', () => {
  clickCount += 1;
  span.innerText = clickCount;
});
