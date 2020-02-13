import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as API from '../../../../util/pokemon_api_util';
import { handleName, extractMove } from '../../../../util/pokemon_util';
import { selectMoves } from '../../../../selectors/moves_selector';
import { receiveMove } from '../../../../actions/moves_actions';

export const PokemonMoveItem = (props) => {
    const { className, move } = props;
    const dispatch = useDispatch();
    const moveState = useSelector(selectMoves);
    const moveDetails = moveState ? extractMove(moveState, move.name) : null;

    useEffect(() => { API.requestMove(move.name, dispatch, receiveMove) }, []);

    return (
        <div className={className}>
            {moveDetails ?
                <ul>
                    <li>{handleName(move.name)}</li>
                    <li>{handleName(move.learn_method)}</li>
                    <li>{move.level_learned}</li>
                </ul> : <p>Loading...</p>}
        </div>
    )
}