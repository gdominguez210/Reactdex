import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { selectMoves } from '../../../selectors/moves_selector';
import { parseMoves } from '../../../util/pokemon_util';
import { DynamicModule } from '../../lazyload/dynamic_module/dynamic_module'
import { LocationObserver } from '../../lazyload/intersection_observer/intersection_observer';
import { requestMove } from '../../../util/pokemon_api_util';
import { receiveMove } from '../../../actions/moves_actions';

export const PokemonMoves = (props) => {
    const { className, moves } = props;
    const parsedMoves = parseMoves(moves);
    const dispatch = useDispatch();
    const moveState = useSelector(selectMoves);
    const [limit, setLimit] = useState(5);

    (async () => {
        for (const move of parsedMoves) {
            await requestMove(move.name, dispatch, receiveMove);
            console.log(move.name);
        }
    })()
    //     while (idx <= limit) {
    //         return (
    //             <DynamicModule key={idx} move={move} />
    //         )
    //     }
    // });
    const moveItems = null;

    return (
        <div className={className}>
            {moveItems}
            <LocationObserver continueObserving={true} onIntersection={() => {
                ('intersected');
                setLimit(limit + 1);
            }} />
        </div>
    )
}