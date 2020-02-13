import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_POKEMON:
            return Object.assign({}, { [action.payload.name]: action.payload });
        default:
            return state;
    }
}

export default pokemonReducer;