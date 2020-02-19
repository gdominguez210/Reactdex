import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import movesReducer from './moves_reducer';
import indexReducer from './index_reducer';

const entitiesReducer = combineReducers({
    pokemon: pokemonReducer,
    moves: movesReducer,
    index: indexReducer
})

export default entitiesReducer;