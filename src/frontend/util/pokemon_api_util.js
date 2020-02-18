
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

export const requestMove = async (move, dispatch, action) => {

    let fetchedMove = await storage.getFromStorage('moves', move.name);

    if (fetchedMove.error) {
        fetchedMove = await getMove(move.name);
        await storage.addToStorage('moves', move.name, fetchedMove);
    }

    dispatch(action({ ...fetchedMove, ...move }));
}

export const requestMoves = async (moves, dispatch, action) => {

    let fetchedMoves = {};

    for (const move of moves) {
        let fetchedMove = await storage.getFromStorage('moves', move.name);
        if (fetchedMove.error) {
            fetchedMove = await getMove(move.name);
            await storage.addToStorage('moves', move.name, fetchedMove);
        }
        fetchedMoves[fetchedMove.name] = { ...fetchedMove, ...move };
    }

    dispatch(action(fetchedMoves));
}
