import React from 'react';
import styled from 'styled-components'
import { PokemonMoves } from './moves';

export const StyledPokemonMoves = styled(PokemonMoves)`
    
    position: relative;

    .scrollable-container {
        max-height: calc(100% - 160px);
        overflow-y:scroll;
        margin-right:-16px;
        position:relative;
        overflow-x:hidden;
    }

    .moves-header {
        padding: 40px 20px;
        background: #FFFFFF;
        height: 160px;
        
        h2 {
            text-align: center;
            margin-bottom: 15px;
            font-size: 2em;
        }

        ul {
            font-size: 1.5em;
            display: flex;
            justify-content: space-between;
        
            li {
                flex: 1;

                :not(:first-child) {
                    text-align: center;
                }
            }
        } 
`