import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { selectMoves } from '../../../../../selectors/moves_selector';
export const MoveDetails = (props) => {

    const { name } = props;
    const moves = useSelector(selectMoves, shallowEqual)
    const move = moves[name];
    console.log(move);
    return (
        <div>Placeholder</div>
    )
}