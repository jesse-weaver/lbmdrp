import React, { Component } from 'react';
import PropTypes from 'prop-types';
import searchCss from './SearchBar.css';
import { SEARCH_RESULTS_SUCCESS } from '../../../ducks';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      query: ''
    }
  }

  // this queries the api for data
  handleFetch = (query) => {
    const fetchUrl = `/api/artist?q=${query}`;
    this.setState({ query });

    fetch(fetchUrl)
      .then(response => response.json())
      .then((results) => {
        if (!Array.isArray(results)) {
          throw new Error('No Results', err);
          return;
        }
        this.props.dispatch({ type: SEARCH_RESULTS_SUCCESS, payload: results });
        return results;
      }).catch(err => {
        console.log(`Errors when fetching ${fetchUrl}:`, err);
      });
  }

  handleClick = () => {
    const query = this.searchInput.value;
    this.handleFetch(query);
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div className="search">
        <input
          className="search-box"
          name="q"
          type="text"
          size="20"
          placeholder="Search Artists..."
          autoComplete="off"
          ref={(input) => { this.searchInput = input; }}
          onKeyDown={this.handleKeyDown}
        />
        <button className="search-button" name="search" value="search" onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}
