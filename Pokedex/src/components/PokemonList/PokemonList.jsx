import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";
function PokemonList() {
        const DEFAULT_POKEDEX_API_URL = 'https://pokeapi.co/api/v2/pokemon';

  const [pokemonListState, setPokemonListState] = usePokemonList(DEFAULT_POKEDEX_API_URL);

  return (
    <>
      <div className="pokemon-list-wrapper">
        <div id="pokemon-list-header">
          <h1>Pokemon List</h1>
        </div>
        <div className="page-controls">
          <button
            onClick={() =>
              setPokemonListState({
                ...pokemonListState,
                pokedexUrl: pokemonListState.prevUrl,
              })
            }
          >
            Prev
          </button>
          <button
            onClick={() =>
              setPokemonListState({
                ...pokemonListState,
                pokedexUrl: pokemonListState.nextUrl,
              })
            }
          >
            Next
          </button>
        </div>
        <div className="pokemon-list">
          {pokemonListState.pokemonList.map((pokemon) => (
            <Pokemon
              name={pokemon.name}
              key={pokemon.id}
              url={pokemon.image}
              id={pokemon.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PokemonList;
