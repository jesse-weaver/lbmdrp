import React, { Component } from 'react';
import PropTypes from 'prop-types';
import searchResultsCss from './SearchResults.css';

export default class SearchResults extends Component {

  static propTypes = {
    results: PropTypes.array,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { results } = this.props;
    return (
      <ul className="search-results">
        {this.props.results.map(item => (
          <li>{item.name}</li>
        ))}
      </ul>
    );
  }
}
