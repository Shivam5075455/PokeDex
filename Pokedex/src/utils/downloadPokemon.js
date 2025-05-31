import axios from "axios";

    async function downloadPokemons(pokemonListState, setPokemonListState, defaultPokedexUrl, limit=21) {
        const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : defaultPokedexUrl);
        let pokemonResults = response.data.results ? response.data.results : response.data.pokemon;

        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.prevUrl);

        // setPokemonListState((state) => ({...state, nextUrl: response.data.next, prevUrl: response.data.previous}))
        pokemonResults = pokemonResults.slice(0, limit);
        const pokemonPromise = pokemonResults.map(p => {
            if(p.url){
                return axios.get(p.url)
            }else{
                return axios.get(p.pokemon.url)
            }
        })

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

    export default downloadPokemons;