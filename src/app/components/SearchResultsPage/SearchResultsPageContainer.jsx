import React from 'react';
import { connect } from 'react-redux';
import SearchResultsPage from './SearchResultsPage.jsx';


const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
  };
};

const SearchResultsPageContainer = connect(
  mapStateToProps,
)(SearchResultsPage);

export default SearchResultsPageContainer;
