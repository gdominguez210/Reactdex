import React, { useState } from 'react';

import { capitalize } from '../../../../util/pokemon_util'

export const PokemonDetails = (props) => {

    const { sprites, sprite, name, types, className } = props;
    const [loaded, setLoaded] = useState(false);
    const pokemonImg = new Image();
    pokemonImg.onload = () => { setLoaded(true) };
    pokemonImg.src = sprite;

    return (
        loaded ?
            <div className="pokemon-details" >
                <div className="pokemon-image-container">
                    <img src={pokemonImg.src} />
                </div>

                <h1>{capitalize(name)}</h1>
                <div className="types">
                    {types}
                </div>
            </div> : <div>loading...</div>)
}
