import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as API from '../../../../util/pokemon_api_util';
import { handleName, extractMove } from '../../../../util/pokemon_util';
import { selectMoves } from '../../../../selectors/moves_selector';
import { receiveMove } from '../../../../actions/moves_actions';
import { POKEMON_TYPE_COLORS } from '../../../../util/constants';
import { openModal } from '../../../../actions/modal_actions';

export const PokemonMoveItem = (props) => {
    const { className, move, loading } = props;
    const style = loading ? null : {
        backgroundColor: POKEMON_TYPE_COLORS[move.type.name]
    }
    const dispatch = useDispatch();
    return (
        <div className={className} style={style} onClick={() => dispatch(openModal({ component: 'MoveDetails', data: move.name }))}>
            {loading ? <p>Loading...</p> : <ul>
                <li>{handleName(move.name)}</li>
                <li>{handleName(move.learn_method)}</li>
                <li>{move.level_learned}</li>
            </ul>}
        </div>
    )
}