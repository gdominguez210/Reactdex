import React from 'react';
import { parseMoves } from '../../../util/pokemon_util';
import { StyledPokemonMoveItem } from './move_item/styled_move_item';
export const PokemonMoves = (props) => {
    const { className, moves } = props;
    const parsedMoves = parseMoves(moves);
    const moveItems = parsedMoves.map((move, idx) => <StyledPokemonMoveItem key={idx} move={move} />);
    return (
        <div className={className}>
            {moveItems}
        </div>
    )
}