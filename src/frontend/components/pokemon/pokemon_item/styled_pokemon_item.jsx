import React from 'react';
import styled from 'styled-components'
import { PokemonItem } from './pokemon_item';

export const StyledPokemonItem = styled(PokemonItem)`
    height: 100%;

    .pokemon-item {
        padding: 20px;
        height: 100%;
        border: 1px solid #eeeeee;
        border-radius: 4px;
    }

    .pokemon-details {
        text-align: center;
        font-size: 2em;
        
        * {
            margin: .5em;
        }

        img {
            transform: scale(2.5);
        }
    }

    .inner-wrap {
        display:flex;
    }

    .inner-wrap > div {
        flex: 1;
        max-height: 100%;
        height: 100%;
    }
`