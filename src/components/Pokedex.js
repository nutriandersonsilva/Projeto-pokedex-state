import React from 'react';
import { arrayOf } from 'prop-types';
import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonAtual: 0,
      nomePokemon: '',
    };
    this.proximoPokemon = this.proximoPokemon.bind(this);
    this.escolhePokemon = this.escolhePokemon.bind(this);
    this.definePokemon = this.definePokemon.bind(this);
  }

  proximoPokemon(todosPokemons) {
    this.setState((estadoAnterior) => ({
      pokemonAtual: (estadoAnterior.pokemonAtual + 1) % todosPokemons,
    }));
  }

  escolhePokemon(nomePokemon) {
    this.setState({ nomePokemon, pokemonAtual: 0 });
  }

  definePokemon() {
    const { pokemonList } = this.props;
    const { nomePokemon } = this.state;

    return pokemonList.filter((pokemon) => {
      if (nomePokemon === '') return true;
      return pokemon.type === nomePokemon;
    });
  }

  render() {
    const { pokemonAtual } = this.state;
    const escolhePokemon = this.definePokemon();
    const pokemon = escolhePokemon[pokemonAtual];

    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemon } />
        <button
          type="button"
          onClick={ () => this.proximoPokemon(escolhePokemon.length) }
        >
          Próximo pokémon
        </button>
        <button type="button" onClick={ () => this.escolhePokemon('Fire') }>
          Fire
        </button>
        <button type="button" onClick={ () => this.escolhePokemon('Psychic') }>
          Psychic
        </button>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
}.isRequired;

export default Pokedex;
