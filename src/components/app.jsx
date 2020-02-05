import React, { useEffect } from 'react';
import { PokemonUI } from './pokemon/pokemon'
import { getRandomId, getRandomTypeId } from '../util/pokemon_util'
import { Provider } from 'react-redux';
import SearchBar from './search/search_bar';
import Sidebar from './sidebar/sidebar';

const App = ({ store }) => {

    return (
        <Provider store={store}>
            <Sidebar />
            <PokemonUI test={'test'} identifier={1} pokeType={getRandomTypeId()}>
                <SearchBar>

                </SearchBar>
            </PokemonUI>
        </Provider>
    )
}

export default App;