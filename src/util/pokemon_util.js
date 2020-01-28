import { POKEMON_TYPES } from './constants';
export const getRandomId = () => Math.floor(Math.random() * (152 - 0)) - 0;
export const getRandomTypeId = () => {
    let id = Math.floor(Math.random() * (POKEMON_TYPES.length - 0)) - 0;
    return POKEMON_TYPES[id];
}

export const getPokemonOfType = (object) => {
    return object.pokemon;
}

export const extractPokemon = obj => {
    return Object.values(obj)[0];
}