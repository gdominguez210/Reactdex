import { RECEIVE_MOVE, RECEIVE_MOVES } from '../actions/moves_actions';
import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
const movesReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_MOVE:
            return Object.assign({}, state, { [action.payload.name]: action.payload });
        case RECEIVE_MOVES:
            return action.payload;
        case RECEIVE_POKEMON:
            return {};
        default:
            return state;
    }
}

export default movesReducer;