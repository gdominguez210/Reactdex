import React from 'react';

import { capitalize } from '../../../../util/pokemon_util'

export const PokemonDetails = (props) => {

    const { sprites, name, types, className } = props;

    return (
        <div className="pokemon-details" >
            <div className="pokemon-image-container">
                <img src={sprites.front_default} />
            </div>

            <h1>{capitalize(name)}</h1>
            <div className="types">
                {types}
            </div>
        </div>)
}
