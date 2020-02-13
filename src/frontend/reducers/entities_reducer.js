import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import movesReducer from './moves_reducer';

const entitiesReducer = combineReducers({
    pokemon: pokemonReducer,
    moves: movesReducer
})

export default entitiesReducer;