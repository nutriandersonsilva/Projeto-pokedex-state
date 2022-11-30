import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      primeiroPokemon: 0,
    };
    this.proximoPokemon = this.proximoPokemon.bind(this);
  }

  proximoPokemon() {
    this.setState((estadoAnterior) => ({
      primeiroPokemon: estadoAnterior.primeiroPokemon + 1,
    }));
  }

  render() {
    const { pokemonList } = this.props;
    const { primeiroPokemon } = this.state;
    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemonList[primeiroPokemon] } />
        <button
          type="button"
          onClick={ () => this.proximoPokemon(primeiroPokemon.length) }
        >
          Próximo pokémon
        </button>
      </div>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
