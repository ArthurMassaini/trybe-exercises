import React from 'react';
import './App.css';

const task = (value) => {
  return <li>{value}</li>;
};

const array = ['Estudar', 'Fazer TCC', 'Zerar ghost of tsushima'];

class App extends React.Component {
  render() {
    return array.map((element) => task(element));
  }
}

export default App;
