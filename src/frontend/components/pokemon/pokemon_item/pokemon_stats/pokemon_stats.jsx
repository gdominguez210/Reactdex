
import React from 'react';
import { StyledPokemonStatItem } from './pokemon_stat_item/styled_pokemon_stat_item';

export const PokemonStats = (props) => {

    const { stats, className } = props;
    const statItems = stats.map(item => <StyledPokemonStatItem stat={item} key={item.stat.name} />).reverse();
    return (
        <div className={className}>
            <div>
                <h3>Stats</h3>
            </div>
            <div>
                {statItems}
            </div>
        </div>
    )
}