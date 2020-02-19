import React from 'react';
import styled from 'styled-components'
import { PokemonMoveItem } from './move_item';

const StyledPokemonMoveItem = styled(PokemonMoveItem)`
    border: 1px solid #dddddd;
    border-radius: 4px;
    padding: 40px 20px;
    margin: 40px 0px;
    font-size: 2em;
    color: #FFFFFF;
    text-shadow: 0px 0px 5px #333333;

    :first-child {
        margin-top: 0px;
    }
    
    ul {
        display: flex;
        justify-content: space-between;

        > li {
        flex: 1;

            :not(:first-child){
                text-align: center;
            }
        }
    }

`


export default StyledPokemonMoveItem;