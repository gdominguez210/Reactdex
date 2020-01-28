import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { selectPokemon } from '../../selectors/pokemon_selector';
import * as API from '../../util/pokemon_api_util';
import { extractPokemon } from '../../util/pokemon_util';
import { PokemonItem } from './pokemon_item'
import { receivePokemon } from '../../actions/pokemon_actions';

export const PokemonUI = (props) => {

    const { identifier, pokeType } = props;
    const dispatch = useDispatch();
    const pokemonState = useSelector(selectPokemon, shallowEqual);
    const pokemon = extractPokemon(pokemonState);

    useEffect(() => { API.requestPokemon(identifier, dispatch, receivePokemon) }, []);

    return (
        pokemon ? <PokemonItem pokemon={pokemon} /> : null
    )
}