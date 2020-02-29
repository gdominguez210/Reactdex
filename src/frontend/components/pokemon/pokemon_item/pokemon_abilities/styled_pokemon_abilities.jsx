import styled from 'styled-components';

import { PokemonAbilities } from './pokemon_abilities';

export const StyledPokemonAbilities = styled(PokemonAbilities)`
    padding: 20px;
    background: #f1f1f1;
    margin: 10px;

    h3 {
        margin-bottom: 10px;
    }
    > div {
        display: flex;
    }
`