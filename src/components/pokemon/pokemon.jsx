import React, { useState, useEffect } from 'react';
import { getPokemon } from '../../util/pokemon_util';
import { PokemonItem } from './pokemon_item'

export const PokemonUI = (props) => {

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const requestPokemon = async () => {
            const fetchedPokemon = await getPokemon(props.pokeId);
            console.log(fetchedPokemon);
            setPokemon(fetchedPokemon);
        }
        requestPokemon();
    }, []);

    return (
        pokemon ? <PokemonItem pokemon={pokemon} /> : null
    )
}