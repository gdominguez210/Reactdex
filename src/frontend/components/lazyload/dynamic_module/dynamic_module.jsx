import React, { useState, useEffect, lazy, Suspense } from 'react';
const StyledPokemonMoveItem = React.lazy(() => import('../../pokemon/moves/move_item/styled_move_item'));

export const DynamicModule = (props) => {

    const { move } = props;
    const style = {
        fontSize: '2em',
        margin: '50px 0px',
        padding: '20px'
    }
    return (
        <div>
            <Suspense fallback={<div style={style}>Loading...</div>}>
                <StyledPokemonMoveItem move={move} />
            </Suspense>
        </div>
    )

}