import React, { useEffect } from 'react';
import { PokemonUI } from './pokemon/pokemon'
import { getRandomId, getRandomTypeId } from '../util/pokemon_util'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import SearchBar from './search/search_bar';
import { StyledSidebar } from './sidebar/styled_sidebar';
import { StyledModal } from './modal/styled_modal';
import { theme } from '../styles/theme';
const App = ({ store }) => {

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <StyledSidebar />
                <PokemonUI test={'test'} identifier={'bulbasaur'} pokeType={getRandomTypeId()}>
                    <SearchBar>

                    </SearchBar>
                </PokemonUI>
                <StyledModal />
            </ThemeProvider>
        </Provider>
    )
}

export default App;