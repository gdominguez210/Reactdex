import React from 'react';
import styled from 'styled-components'
import { PokemonMoveItem } from './move_item';

const StyledPokemonMoveItem = styled(PokemonMoveItem)`
    border: 1px solid #dddddd;
    border-radius: 4px;
    padding: 20px;
    margin: 50px 0px;
    font-size: 2em;

    ul {
        display: flex;
        justify-content: space-between;
    }

    ul > li {
        flex: 1;
    }
`

export default StyledPokemonMoveItem;