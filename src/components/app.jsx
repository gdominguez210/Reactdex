import React, { useEffect } from 'react';
import { PokemonUI } from './pokemon/pokemon'
import { getRandomId, getRandomTypeId } from '../util/pokemon_util'
import { Provider } from 'react-redux';

const App = ({ store }) => {

    return (
        <Provider store={store}>
            <PokemonUI test={'test'} identifier={getRandomId()} pokeType={getRandomTypeId()} />
        </Provider>
    )
}

export default App;