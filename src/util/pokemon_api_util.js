
import * as storage from './storage_util';

export const getPokemon = async (pokeId) => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    let pokemon = await response.json();
    return pokemon;
}

export const getType = async (string) => {
    let response = await fetch(`https://pokeapi.co/api/v2/type/${string}`);
    let type = await response.json();
    return type;
}

export const requestPokemon = async (id, dispatch, action) => {

    let fetchedPokemon = storage.getFromStorage(id);

    if (!fetchedPokemon) {
        fetchedPokemon = await getPokemon(id);
        storage.addToStorage(id, fetchedPokemon);
    }

    dispatch(action(fetchedPokemon));
}
