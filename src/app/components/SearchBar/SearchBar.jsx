import React, { Component } from 'react';
import PropTypes from 'prop-types';
import searchCss from './SearchBar.css';
import { SEARCH_RESULTS_SUCCESS } from '../../ducks';

export default class SearchBar extends Component {
  static propTypes = {
    onSearchResults: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      query: ''
    }
  }

  componentDidMount = () => {
    const query = this.props.match && this.props.match.params && this.props.match.params.query || null;
    if (query) {
      console.log("trying to fetch")
      this.handleFetch(query);
    }
  }

  // this queries the api for data
  handleFetch = (query) => {
    const fetchUrl = `/api/artist?q=${query}`;
    console.log(`fetchUrl: ${fetchUrl}`)

    fetch(fetchUrl)
      .then(response => response.json())
      .then((results) => {
        if (!Array.isArray(results)) {
          throw new Error('No Results', err);
        }
        this.props.onSearchResults(results);
        this.props.history.push(`/search/${query}`);
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
        <input type="image" className="search-button" name="search" value="search" src="assets/images/magIcon1.jpg" onClick={this.handleClick}/>
      </div>
    );
  }
}
