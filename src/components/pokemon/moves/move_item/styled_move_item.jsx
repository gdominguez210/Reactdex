import React from 'react';
import styled from 'styled-components'
import { PokemonMoveItem } from './move_item';

export const StyledPokemonMoveItem = styled(PokemonMoveItem)`
    border: 1px solid #dddddd;
    border-radius: 4px;
    padding: 10px;
    margin: 10px 0px;

    ul {
        display: flex;
        justify-content: space-between;
    }

    ul > li {
        flex: 1;
    }
`