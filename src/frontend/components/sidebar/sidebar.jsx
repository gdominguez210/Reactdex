import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { selectIndex } from '../../selectors/index_selector';
import { requestIndex } from '../../util/pokemon_api_util'
import { receiveIndex } from '../../actions/index_actions';
import { LocationObserver } from '../lazyload/intersection_observer/intersection_observer';
import { StyledIndexItem } from './index_items/styled_index_item';
export const Sidebar = (props) => {
    const { className } = props;
    let dispatch = useDispatch();
    let index = useSelector(selectIndex, shallowEqual);
    console.log(index.next);
    useEffect(() => {
        requestIndex(undefined, dispatch, receiveIndex);
    }, []);

    let indexItems = Object.values(index).length > 0 ? index.results.map((item, idx) => <StyledIndexItem name={item.name} id={idx + 1} />) : null;
    let intersectionObserver = index.results.length >= 20 ? <LocationObserver continueObserving={true} onIntersection={() => {
        requestIndex(index.next, dispatch, receiveIndex);
    }} /> : null;
    console.log(intersectionObserver);
    return (
        <aside className={className}>
            {indexItems}
            {intersectionObserver}
        </aside>
    )
}