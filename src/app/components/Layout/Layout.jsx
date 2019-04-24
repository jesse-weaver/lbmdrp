import React from 'react';
import Header from '../Header/Header.jsx';
import SearchBar from '../SearchBar/SearchBarContainer.jsx';
import SearchResults from '../SearchResults/SearchResultsContainer.jsx';

export default function pageLayout() {
  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="search-results">
        <SearchResults />
      </div>
    </div>
  );
}

