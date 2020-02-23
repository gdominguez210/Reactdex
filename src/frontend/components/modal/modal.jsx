

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { selectModal } from '../../selectors/modal_selector';
import { useComponent } from '../../util/modal_util'
export const Modal = (props) => {

    const { className } = props;
    const modal = useSelector(selectModal, shallowEqual);
    const dispatch = useDispatch();
    const component = modal ? useComponent(modal) : null;

    return (
        modal ?
            <div className={className} onClick={() => { dispatch(closeModal()) }}>
                <div onClick={e => e.stopPropagation()}>
                    <div>
                        <div onClick={() => { dispatch(closeModal()) }}>Close</div>
                        {component}
                    </div>
                </div>
            </div> : null
    )

}