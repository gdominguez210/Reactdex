
import * as storage from './storage_util';
import { POKEMON_TYPES } from './constants';
export const getRandomId = () => Math.floor(Math.random() * (152 - 0)) - 0;
export const getRandomTypeId = () => {
    let id = Math.floor(Math.random() * (POKEMON_TYPES.length - 0)) - 0;
    return POKEMON_TYPES[id];
}

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

export const requestType = async (id, callback) => {

    let fetchedType = storage.getFromStorage(id);
    if (!fetchedType) {
        console.log('new data');
        fetchedType = await getType(id);
        storage.addToStorage(id, fetchedType);
    } else {
        console.log('using stored data');
    }
    console.log(fetchedType);
    const pokemonOfType = getPokemonOfType(fetchedType);
    console.log(pokemonOfType);
    callback(pokemonOfType)
}