
import * as storage from './storage_util';


export const getType = async (string) => {
    let response = await fetch(`https://pokeapi.co/api/v2/type/${string}`);
    let type = await response.json();
    return type;
}

export const getMove = async (string) => {
    let response = await fetch(`https://pokeapi.co/api/v2/move/${string}`);
    let move = await response.json();
    return move;
}

export const getPokemon = async (pokeId) => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    let pokemon = await response.json();
    return pokemon;
}

export const requestPokemon = async (id, dispatch, action) => {

    let fetchedPokemon = await storage.getFromStorage('pokemon', id);

    if (fetchedPokemon.error) {
        fetchedPokemon = await getPokemon(id);
        await storage.addToStorage('pokemon', id, fetchedPokemon);
    }

    dispatch(action(fetchedPokemon));
}

export const requestMove = async (id, dispatch, action) => {

    let fetchedMove = await storage.getFromStorage('moves', id);

    if (fetchedMove.error) {
        fetchedMove = await getMove(id);
        await storage.addToStorage('moves', id, fetchedMove);
    }

    dispatch(action(fetchedMove));
}

export const requestMoves = async (ids, dispatch, action) => {

    let fetchedMoves = [];

    for (const id of ids) {
        let fetchedMove = await storage.getFromStorage('moves', id);
        if (fetchedMove.error) {
            fetchedMove = await getMove(id);
            await storage.addToStorage('moves', id, fetchedMove);
        }
        fetchMoves.push(fetchedMove);
    }

    dispatch(action(fetchedMoves));
}
