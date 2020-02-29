import React from 'react';
import styled from 'styled-components';
import { PokemonStatItem } from './pokemon_stat_item';
import { calcStatVal } from './util';
export const StyledPokemonStatItem = styled(PokemonStatItem)`
    padding: 5px;
    text-align:left;
    display: flex;
    font-size: .75em;

    > div {
        padding: 5px;
        display: flex;
    }

    .label {
        flex: 1;
        align-items: center;
    }

    .val-container {
        flex: 2;

        p {
            min-width: 20%;
            text-align: center;
        }
    }
    .val {
        position: relative;
        background: #eeeeee;
        border-radius: 4px;
        flex: 1;

        :after {
            position: absolute;
            content: '';
            border-radius: 4px;
            height: 100%;
            background: rgba(0,0,0,0.5);
            transition: .3s all linear;
            width: ${props => calcStatVal(props.stat.base_stat)}%;
        }
    }
`