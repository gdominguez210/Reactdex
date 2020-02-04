import React from 'react';
import styled from 'styled-components'
import { PokemonItem } from './pokemon_item';

export const StyledPokemonItem = styled(PokemonItem)`
    .pokemon-item {
        padding: 20px;
        border: 1px solid #eeeeee;
        border-radius: 4px;
    }

    .pokemon-details {
        text-align: center;
    }

    .inner-wrap {
        display:flex;
    }

    .inner-wrap > div {
        flex: 1;
    }
`