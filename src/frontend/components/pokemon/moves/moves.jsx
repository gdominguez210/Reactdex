import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { selectMoves } from '../../../selectors/moves_selector';
import { selectPokemon } from '../../../selectors/pokemon_selector';
import { parseMoves } from '../../../util/pokemon_util';
import { DynamicModule } from '../../lazyload/dynamic_module/dynamic_module'
import StyledPokemonMoveItem from './move_item/styled_move_item'
import { LocationObserver } from '../../lazyload/intersection_observer/intersection_observer';
import { requestMove, requestMoves } from '../../../util/pokemon_api_util';
import { receiveMove, receiveMoves } from '../../../actions/moves_actions';

export const PokemonMoves = (props) => {

    const { className, moves } = props;
    const parsedMoves = parseMoves(moves);
    const dispatch = useDispatch();
    const movesArr = Object.values(useSelector(selectMoves, shallowEqual));
    const pokemon = useSelector(selectPokemon);
    const [offset, setOffset] = useState(6);
    const initialLoadedMoves = [];
    for (let i = 0; i < 6; i++) {
        initialLoadedMoves.push(parsedMoves[i]);
    }
    useEffect(() => {
        requestMoves(initialLoadedMoves, dispatch, receiveMoves);
        setOffset(6);
    }, [pokemon])

    const moveItems = movesArr.length > 0 ? movesArr.map((move, idx) => <StyledPokemonMoveItem key={idx} move={move} />) : null;
    return (
        <div className={className}>
            {moveItems}
            <LocationObserver continueObserving={true} onIntersection={() => {
                if (offset < parsedMoves.length) {
                    requestMove(parsedMoves[offset], dispatch, receiveMove)
                    setOffset(offset + 1);
                }
            }} />
        </div>
    )
}