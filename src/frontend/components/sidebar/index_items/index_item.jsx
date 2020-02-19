import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { capitalize } from '../../../util/pokemon_util';
import { requestPokemon } from '../../../util/pokemon_api_util';
import { receivePokemon } from '../../../actions/pokemon_actions';

export const IndexItem = (props) => {

    const { name, id, className } = props;
    const dispatch = useDispatch();
    return (
        <div className={className} onClick={() => requestPokemon(name, dispatch, receivePokemon)}>
            <ul>
                <li>{id}</li>
                <li>{capitalize(name)}</li>
            </ul>
        </div>
    )

}