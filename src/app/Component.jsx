import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';

const PageLayout = function pageLayout() {
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
};

export default function () {
  ReactDOM.render(<PageLayout />, document.getElementById('app'));
}
