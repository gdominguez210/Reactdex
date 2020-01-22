
import * as storage from './storage_util';

export const getRandomId = () => Math.floor(Math.random() * (152 - 0)) - 0;
export const getRandomTypeId = () => Math.floor(Math.random() * (18 - 0)) - 0;

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

export const getPokemonOfType = (object) => {
    return object.pokemon;
}

export const requestPokemon = async (id, callback) => {

    let fetchedPokemon = storage.getFromStorage(id);

    if (!fetchedPokemon) {
        console.log('new data');
        fetchedPokemon = await getPokemon(id);
        storage.addToStorage(id, fetchedPokemon);
    } else {
        console.log('using stored data');
    }

    console.log(fetchedPokemon);
    callback(fetchedPokemon);
}