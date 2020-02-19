import React from 'react';

import { capitalize } from '../../../../util/pokemon_util'

export const PokemonDetails = (props) => {

    const { sprites, sprite, name, types, className } = props;

    return (
        <div className="pokemon-details" >
            <div className="pokemon-image-container">
                <img src={sprite} />
            </div>

            <h1>{capitalize(name)}</h1>
            <div className="types">
                {types}
            </div>
        </div>)
}
