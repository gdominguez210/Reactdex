import React, { useEffect } from 'react';
import { PokemonUI } from './pokemon/pokemon'
import { getRandomId, getRandomTypeId } from '../util/pokemon_util'
const App = () => {

    return (
        <PokemonUI identifier={62} pokeType={getRandomTypeId()} />
    )
}

export default App;