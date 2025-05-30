import { useEffect, useState } from "react";
import downloadPokemons from "../utils/downloadPokemon";

function usePokemonList(DEFAULT_POKEDEX_API_URL){
    // const DEFAULT_POKEDEX_API_URL = 'https://pokeapi.co/api/v2/pokemon';
    // const [pokemonList, setPokemonList] = useState([]);
    // const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_POKEDEX_API_URL);
    // const [nextUrl, setNextUrl] = useState(DEFAULT_POKEDEX_API_URL);
    // const [prevUrl, setPrevUrl] = useState(DEFAULT_POKEDEX_API_URL);


    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexUrl: DEFAULT_POKEDEX_API_URL,
        nextUrl: DEFAULT_POKEDEX_API_URL,
        prevUrl: DEFAULT_POKEDEX_API_URL

    });

    useEffect(() => {
        downloadPokemons(pokemonListState,setPokemonListState, DEFAULT_POKEDEX_API_URL);

    }, [pokemonListState.pokedexUrl]);

    return [pokemonListState, setPokemonListState];

}

export default usePokemonList;