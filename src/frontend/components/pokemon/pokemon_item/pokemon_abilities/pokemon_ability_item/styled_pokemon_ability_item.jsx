import styled from 'styled-components';
import { PokemonAbilityItem } from './pokemon_ability_item';

export const StyledPokemonAbilityItem = styled(PokemonAbilityItem)`

    display: flex;

    > div {
        padding: 15px;
        position: relative;
        border-radius: 20px;
        margin: 10px 5px;
        border: 1px solid #ddd;

        :first-child {
            background: #FFFFFF;
            z-index: 1;
        }
        :nth-child(2) {
            background: #f1f1f1;
            margin-left: -25px;
            padding-left: 35px;
            z-index: 0;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
        }
    }
`