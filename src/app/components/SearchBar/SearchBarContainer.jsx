import React from 'react';
import { connect } from 'react-redux';
import { searchResultsSuccess, SEARCH_RESULTS_SUCCESS } from '../../ducks';
import SearchBar from './SearchBar.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchResults: results => dispatch({ type: SEARCH_RESULTS_SUCCESS, payload: results }),
  };
};

const SearchBarContainer = connect(
  null,
  mapDispatchToProps,
)(SearchBar);

export default SearchBarContainer;
