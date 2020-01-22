import React, { useState, useEffect } from 'react';
import * as API from '../../util/pokemon_util';
import { PokemonItem } from './pokemon_item'

export const PokemonUI = (props) => {
    const { identifier, pokeType } = props;
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        requestPokemon(identifier, setPokemon);
    }, []);

    const [pokemonType, setPokemonType] = useState(null);
    useEffect(() => {
        const requestType = async () => {
            const fetchedType = await getType(props.pokeType);
            console.log(fetchedType);
            const pokemonOfType = getPokemonOfType(fetchedType);
            console.log(pokemonOfType);
            setPokemonType(pokemonOfType)
        }
        requestType();
    }, [])
    return (
        pokemon ? <PokemonItem pokemon={pokemon} /> : null
    )
}