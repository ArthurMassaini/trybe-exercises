import React from 'react';
import './App.css';

const task = (value) => {
  return <li>{value}</li>;
};

const array = ['Estudar', 'Fazer TCC', 'Zerar ghost of tsushima'];

function App() {
  return array.map((element) => task(element));
}

export default App;
