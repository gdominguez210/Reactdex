import React from 'react';
import { parseMoves } from '../../../util/pokemon_util';
import { DynamicModule } from '../../lazyload/dynamic_module/dynamic_module'
import { LocationObserver } from '../../lazyload/intersection_observer/intersection_observer';
export const PokemonMoves = (props) => {
    const { className, moves } = props;
    const parsedMoves = parseMoves(moves);
    const style = {
        fontSize: '2em',
        margin: '50px 0px',
        padding: '20px'
    }
    const moveItems = parsedMoves.map((move, idx) => {
        console.log(idx);
        if (idx <= 5) {
            return <div style={style} key={idx}>Loading...</div>
        } else {
            return (
                <LocationObserver>
                    <DynamicModule key={idx} move={move} />
                </LocationObserver>
            )
        }
    });

    console.log(moveItems);
    return (
        <div className={className}>
            {moveItems}
        </div>
    )
}