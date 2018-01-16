import React, { Component } from 'react';
import Search from './Search.jsx';
import SearchResults from './SearchResults.jsx';

export default class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      query: ''
    }
  }

  // this queries the api for data
  handleFetch = (query) => {
    const fetchUrl = `/api/artist?q=[artist-name:${query}]`;
    this.setState({query});

    fetch(fetchUrl)
      .then(response => response.json())
      .then((results) => {
        console.log(results);
        this.setState({ results });
      }).catch(err => {
        console.log(`Errors when fetching ${fetchUrl}:`, err);
      });
  }

  handleSearch = (query) => {
    this.setState({ query });
    this.handleFetch(query);
  }

  render() {
    return (
      <div className="search">
        <Search
          handleSearch={this.handleSearch}
        />
        <SearchResults
          results={this.state.results}
        />
      </div>
    );
  }
}
