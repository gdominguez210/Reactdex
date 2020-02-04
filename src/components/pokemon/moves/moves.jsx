import React from 'react';
import { parseMoves } from '../../../util/pokemon_util';
import { StyledPokemonMoveItem } from './move_item/styled_move_item';
export const PokemonMoves = (props) => {

    const moves = parseMoves(props.moves);
    const moveItems = moves.map((move, idx) => <StyledPokemonMoveItem key={idx} move={move} />);
    return (
        <div className="pokemon-moves-container">
            {moveItems}
        </div>
    )
}