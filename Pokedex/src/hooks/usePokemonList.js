import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList(){
    const DEFAULT_POKEDEX_API_URL = 'https://pokeapi.co/api/v2/pokemon';
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
    async function downloadPokemons() {
        const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : DEFAULT_POKEDEX_API_URL);
        const pokemonResults = response.data.results;

        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.prevUrl);

        // setPokemonListState((state) => ({...state, nextUrl: response.data.next, prevUrl: response.data.previous}))

        const pokemonPromise = pokemonResults.map(pokemon => axios.get(pokemon.url))

        const pokemonListData = await axios.all(pokemonPromise)

        const pokemonFinalList = pokemonListData.map(pokemonData => {
            const pokemon = pokemonData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                type: pokemon.types
            }
        });

        // setPokemonList(pokemonFinalList);
        setPokemonListState({...pokemonListState, pokemonList:pokemonFinalList, nextUrl: response.data.next, prevUrl: response.data.previous})

        console.log(pokemonFinalList);
    }
    useEffect(() => {
        downloadPokemons()

    }, [pokemonListState.pokedexUrl]);

    return [pokemonListState, setPokemonListState];

}

export default usePokemonList;