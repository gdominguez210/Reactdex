
import styled from 'styled-components';
import { PokemonStats } from './pokemon_stats';

export const StyledPokemonStats = styled(PokemonStats)`
    padding: 20px;
    text-align: left;

    > :first-child {
        padding: 10px;
        background: #f1f1f1;

        h3 {
            padding: 5px;
        }
    }
`