
import React from 'react';
import { MoveDetails } from '../components/pokemon/moves/move_item/move_detail/move_detail';

export const useComponent = (modal) => {

    switch (modal.component) {

        case 'MoveDetails':
            return <MoveDetails name={modal.data} />
        default:
            return null;
    }


}