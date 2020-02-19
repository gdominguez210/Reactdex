import { RECEIVE_INDEX } from '../actions/index_actions';

const indexReducer = (state = { results: [], next: undefined, prev: undefined }, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_INDEX:
            let newState = Object.assign({}, state);
            newState['results'] = [...newState['results'], ...action.payload.results];
            newState['next'] = action.payload.next;
            return newState;
        default:
            return state;
    }
}

export default indexReducer;