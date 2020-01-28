import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = { pokemon: {} }, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_POKEMON:
            let modState = Object.assign({}, state);
            modState['pokemon'] = { [action.payload.name]: action.payload }
            return modState;
        default:
            return state;
    }
}

export default pokemonReducer;