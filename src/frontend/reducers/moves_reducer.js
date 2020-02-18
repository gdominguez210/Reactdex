import { RECEIVE_MOVE } from '../actions/moves_actions';

const movesReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_MOVE:
            return Object.assign({}, state, { [action.payload.name]: action.payload });
        case RECEIVE_MOVES:
            return action.payload;
        default:
            return state;
    }
}

export default movesReducer;