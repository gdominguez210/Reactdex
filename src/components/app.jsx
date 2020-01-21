import React, { useEffect } from 'react';
import { getPokemon } from '../util/pokemon_util';

const App = () => {

    useEffect(() => {
        getPokemon();
    })

    return 'Hello world';
}

export default App;