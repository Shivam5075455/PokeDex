import { Link } from "react-router-dom";
import "./PokemonDetails.css";
import usePokemon from "../../hooks/usePokemon";
import Pokemon from "../Pokemon/Pokemon";

function PokemonDetails({pokemonName}) {


  const [pokemon, pokemonListState] = usePokemon(pokemonName);

  return (
    <>
      <h1 className="pokemon-details-redirect">
        <Link to="/" className="redirect">
          Pokedex
        </Link>
      </h1>

      {pokemon && (
        <div className="pokemon-details-wrapper">
          <div className="pokemon-details-name">{pokemon.name}</div>
          <div className="pokemon-details-image">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div className="pokemon-details-attr">
            <div>Height: {pokemon.height}</div>
            <div>Weight: {pokemon.weight}</div>
          </div>
          <div className="pokemon-details-type">
            <h1>Type:</h1>
            <span className="pokemon-details-types">{pokemon.types}</span>
          </div>
        </div>
      )}

      <div className="similar-pokemons">
        <h2>Similar Pokemons</h2>
        <div className="pokemon-similar-boxes">
            {pokemonListState.pokemonList.length > 0 && 
            pokemonListState.pokemonList.map((pokemon) => (
            <Pokemon
              name={pokemon.name}
              key={pokemon.id}
              url={pokemon.image}
              id={pokemon.id}
            />
          ))
            
            }
        </div>
      </div>


    </>
  );
}

export default PokemonDetails;
