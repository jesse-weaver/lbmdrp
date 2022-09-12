import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Navigate } from "react-router-dom";
import searchCss from './SearchBar.css';
import { SEARCH_RESULTS_SUCCESS } from '../../ducks';

const SearchBar = (props) => {

  let navigate = useNavigate()
  
  // this queries the api for data
  const handleFetch = (query) => {
    const fetchUrl = `/api/artist?q=${query}`;
    console.log(`fetchUrl: ${fetchUrl}`)

    fetch(fetchUrl)
      .then(response => response.json())
      .then((results) => {
        if (!Array.isArray(results)) {
          throw new Error('No Results', err);
        }
        console.log("got results: ", results)
        props.onSearchResults(results);
      }).catch(err => {
        console.log(`Errors when fetching ${fetchUrl}:`, err);
      });
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      let query = e.target.value;
      let redirectUrl = `/search/${query}`
      handleFetch(query);
      return navigate(redirectUrl);    
    }
  }

  return (
    <div className="search">
      <input
        className="search-box"
        name="q"
        type="text"
        size="20"
        placeholder="Search Artists..."
        autoComplete="off"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;