import styled from 'styled-components';
import { PokemonType } from './pokemon_type';

export const StyledPokemonType = styled(PokemonType)`

    display: inline-block;
    color: rgb(255, 255, 255);
    padding: 15px;
    border-radius: 20px;
    margin: 0px 2px;
    transition: .3s all linear;
    background-color: ${props => props.theme[props.type.type.name]}
`