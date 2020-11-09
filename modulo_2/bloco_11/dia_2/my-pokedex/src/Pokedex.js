import React from 'react';
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map((element) => (
          <Pokemon key={element.id} data={element} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
