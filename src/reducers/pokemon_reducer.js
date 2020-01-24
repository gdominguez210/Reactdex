import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_POKEMON:
            return action.pokemon;
        default:
            return state;
    }
}

export default pokemonReducer;