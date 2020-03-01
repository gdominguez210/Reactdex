import React from 'react';
import { StyledPokemonType } from './styled_pokemon_type';

export const PokemonTypes = (props) => {

    const { types } = props;
    const typeItems = types.map(type => <div><StyledPokemonType key={type.name} type={type} /></div>);

    return (
        <div className="types">
            <h3>Types</h3>
            {typeItems}
        </div>
    )
}