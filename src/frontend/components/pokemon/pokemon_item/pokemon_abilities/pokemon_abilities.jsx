import React from 'react';
import { StyledPokemonAbilityItem } from './pokemon_ability_item/styled_pokemon_ability_item';

export const PokemonAbilities = (props) => {

    const { abilities, className } = props;
    const sortedAbilities = abilities.sort((a, b) => a.slot - b.slot);
    const abilityItems = sortedAbilities.map(item => <StyledPokemonAbilityItem item={item} key={item.ability.name} />)

    return (
        <div className={className}>
            <h3>Abilities</h3>
            <div>
                {abilityItems}
            </div>
        </div>
    )
}