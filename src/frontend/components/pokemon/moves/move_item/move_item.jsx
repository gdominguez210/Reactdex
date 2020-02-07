import React from 'react';
import { handleName } from '../../../../util/pokemon_util';

export const PokemonMoveItem = (props) => {
    const { className, move } = props;

    return (
        <div className={className}>
            <ul>
                <li>{handleName(move.name)}</li>
                <li>{handleName(move.learn_method)}</li>
                <li>{move.level_learned}</li>
            </ul>
        </div>
    )
}