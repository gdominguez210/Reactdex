import React from 'react';
import styled from 'styled-components'
import { PokemonItem } from './pokemon_item';

export const StyledPokemonItem = styled(PokemonItem)`
    .pokemon-item {
        max-width: 200px;
        padding: 20px;
        border: 1px solid #eeeeee;
        border-radius: 4px;
        margin: 20px auto;
    }

    .pokemon-details {
        text-align: center;
    }
`