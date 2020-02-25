import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { capitalize } from '../../../util/pokemon_util';
import { requestPokemon } from '../../../util/pokemon_api_util';
import { receivePokemon } from '../../../actions/pokemon_actions';
import { AWS_INDEX_BUCKET_URL } from '../../../util/constants';
export const IndexItem = (props) => {

    const { name, id, className } = props;
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const pokemonImg = new Image();
    pokemonImg.onload = () => { setLoaded(true) };
    pokemonImg.src = AWS_INDEX_BUCKET_URL + `${name}.png`;

    return (
        <div className={className} onClick={() => requestPokemon(name, dispatch, receivePokemon)}>
            <ul>
                {loaded ? <li><img src={pokemonImg.src} /></li> : null}
                <li>{id}</li>
                <li>{capitalize(name)}</li>
            </ul>
        </div>
    )

}