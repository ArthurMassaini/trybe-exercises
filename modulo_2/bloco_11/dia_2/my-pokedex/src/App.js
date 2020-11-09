import React from 'react';
import './App.css';
import Pokemon from './Pokemon.js';
import pokemons from './data.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <div className="pokedex">
          {pokemons.map((element) => (
            <Pokemon key={element.id} data={element} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
