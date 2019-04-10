import React, { Component } from 'react';
import searchCss from './SearchBar.css';

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
    this.setState({query});

    fetch(fetchUrl)
      .then(response => response.json())
      .then((results) => {
        console.log(results);
        this.setState({results});
      }).catch(err => {
        console.log(`Errors when fetching ${fetchUrl}:`, err);
      });
  }

  handleClick = () => {
    const query = this.searchInput.value;
    this.handleFetch(query);
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
          ref={(input) => { this.searchInput = input; }}
        />
        <button className="search-button" name="search" value="search" onClick={this.handleClick}>Search</button>
        {this.state.results.map(item => (
          <div>{item.name}</div>
        ))

        }
      </div>
    );
  }
}
