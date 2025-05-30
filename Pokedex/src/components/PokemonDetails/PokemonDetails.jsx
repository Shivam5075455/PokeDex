import { Link, useParams } from 'react-router-dom';
import './PokemonDetails.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PokemonDetails(){

    const { id } = useParams();

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
    }, [id])




    return (

        <>
        
        <h1 className='pokemon-details-redirect'>
            <Link to='/' className='redirect'>Pokedex</Link>
        </h1>

       {pokemon && <div className='pokemon-details-wrapper'>
            <div className='pokemon-details-name'>
                {pokemon.name}
            </div>
            <div className='pokemon-details-image'>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className='pokemon-details-attr'>
                <div>

                Height: {pokemon.height}
                </div>
                <div>

                Weight: {pokemon.weight}
                </div>
            </div>
            <div className='pokemon-details-type'>
                <h1>Type:</h1> <span className='pokemon-details-types'>{pokemon.types}</span>
            </div>
        </div>}
        </>
    )
}

export default PokemonDetails;