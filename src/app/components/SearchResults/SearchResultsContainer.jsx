import React from 'react';
import { connect } from 'react-redux';
import SearchResults from './SearchResults.jsx';


const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
  };
};

const SearchResultsContainer = connect(
  mapStateToProps,
)(SearchResults);

export default SearchResultsContainer;
