import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroPokemon: 0,
    };
    this.proximoPokemon = this.proximoPokemon.bind(this);
  }

  proximoPokemon(pokemons) {
    this.setState((estadoAnterior) => ({
      numeroPokemon: (estadoAnterior.numeroPokemon + 1) % pokemons,
    }));
  }

  render() {
    const { pokemonList } = this.props;
    const { numeroPokemon } = this.state;
    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemonList[numeroPokemon] } />
        <button
          type="button"
          onClick={ () => this.proximoPokemon(pokemonList.length) }
        >
          Próximo pokémon
        </button>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
}.isRequired;

export default Pokedex;
