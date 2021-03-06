import { combineReducers } from 'redux';
import uiReducer from './ui_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    entities: entitiesReducer
})

export default rootReducer;