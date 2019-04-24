import React from 'react';
import { connect } from 'react-redux';
import { searchResultsSuccess, SEARCH_RESULTS_SUCCESS } from '../../../actions';
import SearchBar from './SearchBar.jsx';

const SearchBarContainer = connect()(SearchBar);

export default SearchBarContainer;
