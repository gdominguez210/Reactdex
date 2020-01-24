import * as API from '../util/pokemon_util';

export const RECEIVE_POKEMON = "RECEIVE_POKEMON";


export const receivePokemon = payload => {
    return {
        type: RECEIVE_POKEMON,
        payload
    }
}

export const fetchPokemon = id => dispatch => API.requestPokemon(id, dispatch);