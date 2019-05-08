import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import SearchBar from '../SearchBar/SearchBarContainer.jsx';
import SearchResults from '../SearchResults/SearchResultsContainer.jsx';
import ArtistDetails from '../ArtistDetails/ArtistDetailsContainer.jsx';
import layoutCss from './Layout.css';

export default function pageLayout() {
  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>
      <div className="search-bar">
        <Route path="/" component={SearchBar} />
      </div>
      <div className="search-results">
        <Route exact path="/" component={SearchResults} />
        <Route exact path="/search/:query" component={SearchResults} />
        <Route exact path="/artist/:id" component={ArtistDetails} />
      </div>
    </div>
  );
}

