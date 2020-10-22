// const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

const fetchJoke = () => {
  let jokeContainer = document.querySelector('#jokeContainer');
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      jokeContainer.innerHTML = data.joke;
    });
};

window.onload = () => fetchJoke();

