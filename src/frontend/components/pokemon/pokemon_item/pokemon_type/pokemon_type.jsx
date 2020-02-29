import React from 'react';
import { capitalize } from '../../../../util/pokemon_util';

export const PokemonType = (props) => {

    const { type, className } = props;
    return (
        <span className={className}>
            {capitalize(type.type.name)}
        </span>
    )
}