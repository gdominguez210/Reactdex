
import * as storage from './storage_util';


export const getType = async (string) => {
    let response = await fetch(`https://pokeapi.co/api/v2/type/${string}`);
    let type = await response.json();
    return type;
}

export const getPokemon = async (pokeId) => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    let pokemon = await response.json();
    return pokemon;
}

export const requestPokemon = async (id, dispatch, action) => {

    let fetchedPokemon = await storage.getFromStorage(id);
    console.log(`storage: ${fetchedPokemon}`);
    if (!fetchedPokemon) {
        fetchedPokemon = await getPokemon(id);
        console.log(`api call: ${fetchedPokemon}`);
        await storage.addToStorage(id, fetchedPokemon);
    }

    dispatch(action(fetchedPokemon));
}
