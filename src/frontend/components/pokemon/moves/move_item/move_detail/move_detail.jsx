import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { selectMoves } from '../../../../../selectors/moves_selector';
export const MoveDetails = (props) => {

    const { name } = props;
    const moves = useSelector(selectMoves, shallowEqual)
    const move = moves[name];
    return (
        <div>
            <h2>{move.name}</h2>
            <ul>
                <li>Type: {move.type.name}</li>
                <li>Damage Type: {move.damage_class.name}</li>
                <li>Power: {move.power}</li>
                <li>PP: {move.pp}</li>
                <li>Accuracy: {move.accuracy}</li>
            </ul>
            <p>{move.effect_entries[0].effect}</p>
        </div>
    )
}