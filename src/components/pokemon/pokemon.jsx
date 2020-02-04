import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { selectPokemon } from '../../selectors/pokemon_selector';
import * as API from '../../util/pokemon_api_util';
import { extractPokemon } from '../../util/pokemon_util';
import { StyledPokemonItem } from './pokemon_item/styled_pokemon_item';
import { receivePokemon } from '../../actions/pokemon_actions';
import styled from 'styled-components';

export const PokemonUI = (props) => {

    const { identifier } = props;
    const dispatch = useDispatch();
    const pokemonState = useSelector(selectPokemon, shallowEqual);
    const pokemon = extractPokemon(pokemonState);

    useEffect(() => { API.requestPokemon(identifier, dispatch, receivePokemon) }, []);

    return (
        <section className="container">
            {props.children}
            <div className="pokemon-container">
                {pokemon ? <StyledPokemonItem pokemon={pokemon} /> : null}
            </div>
        </section>)
}