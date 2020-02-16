import React, { useState } from 'react';
import { parseMoves } from '../../../util/pokemon_util';
import { DynamicModule } from '../../lazyload/dynamic_module/dynamic_module'
import { LocationObserver } from '../../lazyload/intersection_observer/intersection_observer';
export const PokemonMoves = (props) => {
    const { className, moves } = props;
    const parsedMoves = parseMoves(moves);

    const [limit, setLimit] = useState(5);
    const moveItems = parsedMoves.map((move, idx) => {
        while (idx <= limit) {
            return (
                <DynamicModule key={idx} move={move} />
            )
        }
    });
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