import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { selectIndex } from '../../selectors/index_selector';
import { requestIndex } from '../../util/pokemon_api_util'
import { receiveIndex } from '../../actions/index_actions';
import { selectPokemon } from '../../selectors/pokemon_selector';
import { extractPokemon } from '../../util/pokemon_util';
import { LocationObserver } from '../lazyload/intersection_observer/intersection_observer';
import { StyledIndexItem, ActiveStyledIndexItem } from './index_items/styled_index_item';
export const Sidebar = (props) => {
    const { className } = props;
    let dispatch = useDispatch();
    let index = useSelector(selectIndex, shallowEqual);
    useEffect(() => {
        requestIndex(undefined, dispatch, receiveIndex);
    }, []);

    const pokemonState = useSelector(selectPokemon, shallowEqual);
    const pokemon = extractPokemon(pokemonState);

    let indexItems = Object.values(index).length > 0 ? index.results.map((item, idx) => {
        return pokemon && item.name === pokemon.name ?
            <ActiveStyledIndexItem name={item.name} id={idx + 1} /> :
            <StyledIndexItem name={item.name} id={idx + 1} />
    }) : null;

    let intersectionObserver = index.results.length >= 20 ?
        <LocationObserver continueObserving={true} onIntersection={() => {
            requestIndex(index.next, dispatch, receiveIndex);
        }} /> : null;
        
    return (
        <aside className={className}>
            {indexItems}
            {intersectionObserver}
        </aside>
    )
}