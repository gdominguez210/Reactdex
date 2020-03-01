import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { extractPokemon } from '../../../../util/pokemon_util';
import { selectPokemon } from '../../../../selectors/pokemon_selector';
import { capitalize } from '../../../../util/pokemon_util'
import { Optimg } from '../../../image/image';
import { StyledPokemonStats } from '../pokemon_stats/styled_pokemon_stats';
import { PokemonTypes } from '../pokemon_type/pokemon_types';
import { StyledPokemonAbilities } from '../pokemon_abilities/styled_pokemon_abilities';
import { StyledPokemonDescription } from '../pokemon_description/styled_pokemon_description';
export const PokemonDetails = (props) => {

    const { sprites, sprite, id, name, types, className, stats, abilities, flavorTexts } = props;

    const [loaded, setLoaded] = useState(false);
    const [url, setUrl] = useState('');
    return (
        <div className="pokemon-details-container" >
            <div className="pokemon-details" >
                <div className="pokemon-header">
                    <p>{id}</p>
                </div>
                <div className="pokemon-image-container">
                    <Optimg source={sprite} />
                </div>
                <h1>{capitalize(name)}</h1>
                <div className="row">
                    <StyledPokemonAbilities abilities={abilities} />
                    <PokemonTypes types={types} />
                </div>
                <StyledPokemonDescription flavorTexts={flavorTexts} />
                <StyledPokemonStats stats={stats} />
            </div>
        </div>)
}
