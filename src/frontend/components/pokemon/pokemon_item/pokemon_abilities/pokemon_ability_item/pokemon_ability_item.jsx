import React from 'react';
import { handleName } from '../../../../../util/pokemon_util';
export const PokemonAbilityItem = (props) => {
    const { item, className } = props;
    const { ability, is_hidden } = item;

    return (
        <div className={className}>
            <div>
                {handleName(ability.name)}
            </div>
            {is_hidden ? <div>Hidden</div> : null}
        </div>
    )
}