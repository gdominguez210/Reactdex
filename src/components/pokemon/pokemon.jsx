import React, { useState, useEffect } from 'react';
import * as API from '../../util/pokemon_util';
import { PokemonItem } from './pokemon_item'

export const PokemonUI = (props) => {
    const { identifier, pokeType } = props;
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        API.requestPokemon(identifier, setPokemon);
    }, []);

    const [pokemonType, setPokemonType] = useState(null);
    useEffect(() => {
        API.requestType(pokeType, setPokemonType);
    }, [])
    return (
        pokemon ? <PokemonItem pokemon={pokemon} /> : null
    )
}