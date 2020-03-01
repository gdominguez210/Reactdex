import React from 'react';
import { parseFlavorText } from './util';

export const PokemonDescription = (props) => {

    const { flavorTexts, className } = props;
    const description = parseFlavorText(flavorTexts);
    return (
        <div className={className}>
            <p>{description}</p>
        </div>
    )

}