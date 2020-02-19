import React, { useEffect } from 'react';
import { PokemonUI } from './pokemon/pokemon'
import { getRandomId, getRandomTypeId } from '../util/pokemon_util'
import { Provider } from 'react-redux';
import SearchBar from './search/search_bar';
import { StyledSidebar } from './sidebar/styled_sidebar';

const App = ({ store }) => {

    return (
        <Provider store={store}>
            <StyledSidebar />
            <PokemonUI test={'test'} identifier={'bulbasaur'} pokeType={getRandomTypeId()}>
                <SearchBar>

                </SearchBar>
            </PokemonUI>
        </Provider>
    )
}

export default App;