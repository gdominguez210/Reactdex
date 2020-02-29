import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { extractPokemon } from '../../../../util/pokemon_util';
import { selectPokemon } from '../../../../selectors/pokemon_selector';
import { capitalize } from '../../../../util/pokemon_util'
import { Optimg } from '../../../image/image';

export const PokemonDetails = (props) => {

    const { sprites, sprite, id, name, types, className } = props;
    const [loaded, setLoaded] = useState(false);
    const [url, setUrl] = useState('');
    const pokemonState = useSelector(selectPokemon, shallowEqual);
    const pokemon = extractPokemon(pokemonState);
    // let pokemonImg = new Image();

    // useEffect(() => {
    //     setLoaded(false);
    //     setUrl('');
    // }, [pokemon]);

    // pokemonImg.onload = async () => {
    //     setLoaded(true)
    //     setUrl(pokemonImg.src);
    // };

    // if (url.length === 0) pokemonImg.src = sprite;
    // console.log(pokemon);
    console.log(sprite);
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
                <div className="types">
                    {types}
                </div>
            </div>
        </div>)
}
