
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as API from '../../util/pokemon_api_util';
import { receivePokemon } from '../../actions/pokemon_actions';

const SearchBar = (props) => {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    return (
        <div className="search-bar-container">
            <input type="text" onChange={e => setQuery(e.target.value)} value={query} />
            <button onClick={() => API.requestPokemon(query, dispatch, receivePokemon)}>Search</button>
        </div>
    )
}

export default SearchBar;