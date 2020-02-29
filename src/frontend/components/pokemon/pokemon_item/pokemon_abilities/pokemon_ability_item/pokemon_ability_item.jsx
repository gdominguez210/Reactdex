import React from 'react';
import { handleName } from '../../../../../util/pokemon_util';
export const PokemonAbilityItem = (props) => {
    const { item, className } = props;
    const { ability, is_hidden } = item;

    return (
        <div className={className}>
            <p>
                {handleName(ability.name)}
            </p>
            {is_hidden ? <p>Hidden</p> : null}
        </div>
    )
}