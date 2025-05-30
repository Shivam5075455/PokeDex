import axios from "axios";
import { useEffect, useState } from "react";

function usePokemon(id){
     const DEFAULT_POKEDEX_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null);

    async function downloadPokemon(){
        const response = await axios.get(DEFAULT_POKEDEX_API_URL + id);
        console.log(response.data);
        const pokemon = response.data;
        setPokemon({
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types.map(t => t.type.name),
            image: pokemon.sprites.other.dream_world.front_default
        })
        
    }

    useEffect(() => {
        downloadPokemon();
    },[])

    return[pokemon];
}

export default usePokemon;