import { Link, useParams } from "react-router-dom";
import "./PokemonDetails.css";
import usePokemon from "../../hooks/usePokemon";

function PokemonDetails() {
  const { id } = useParams();

  const [pokemon] = usePokemon(id);

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
            <h1>Type:</h1>{" "}
            <span className="pokemon-details-types">{pokemon.types}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonDetails;
