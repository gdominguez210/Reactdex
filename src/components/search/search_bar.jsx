
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as API from '../../util/pokemon_api_util';
import { receivePokemon } from '../../actions/pokemon_actions';
import { sanitizeQuery } from '../../util/search_util';
const SearchBar = (props) => {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        API.requestPokemon(sanitizeQuery(query), dispatch, receivePokemon);
    }

    return (
        <div className="search-bar-container">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setQuery(e.target.value)} value={query} placeholder='Search Pokemon...' />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;