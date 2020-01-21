import React, { useEffect } from 'react';
import { PokemonUI } from './pokemon/pokemon'
import { getRandomId } from '../util/pokemon_util'
const App = () => {

    return (
        <PokemonUI pokeId={getRandomId()} />
    )
}

export default App;