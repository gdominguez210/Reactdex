import React from 'react';


export const PokemonMoveItem = (props) => {
    const { className, move } = props;

    return (
        <div className={className}>
            <ul>
                <li>{move.name}</li>
                <li>{move.learn_method}</li>
                <li>{move.level_learned}</li>
            </ul>
        </div>
    )
}