import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemons from "../utils/downloadPokemon";

function usePokemon(id, defaultPokedexUrl){
     const DEFAULT_POKEDEX_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null);

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexUrl: defaultPokedexUrl,
        nextUrl: defaultPokedexUrl,
        prevUrl: defaultPokedexUrl

    });



    async function downloadGivenPokemon(){
        const response = await axios.get(DEFAULT_POKEDEX_API_URL + id);
        console.log(response.data);
        const pokemon = response.data;
        setPokemon({
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types.map(t => t.type.name),
            image: pokemon.sprites.other.dream_world.front_default
        });

        const types = response.data.types.map( t=> t.type.name)
        return types[0];
        
    }

    async function downloadPokemonAndRelated(id){
        const type = await downloadGivenPokemon(id);
        await downloadPokemons(pokemonListState, setPokemonListState, `https://pokeapi.co/api/v2/type/${type}`);

    }

    useEffect(() => {
        downloadPokemonAndRelated(id)
        window.scrollTo({top:0, left:0, behaviour: 'smooth'});
    },[id])

    return[pokemon, pokemonListState];
}

export default usePokemon;