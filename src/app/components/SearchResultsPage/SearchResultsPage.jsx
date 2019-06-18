import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import searchResultsPageCss from './SearchResultsPage.css';

export default class SearchResultsPage extends Component {

  static propTypes = {
    searchResults: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { results } = this.props;
    return (
      <Layout
        displaySearchBar={true}
      >
        <ul className="search-results">
          {!this.props.searchResults.length && (
            <div>No Artists Found</div>
          )}
          {this.props.searchResults.map(item => (
            <li className="search-result-item" key={item.mkid}>
              <span className="artist-thumbnail">
                {item.image ? (
                  <img src={item.image} />
                ) : (
                    <span className="placeholder-thumbnail">
                      <img src="/images/searchResultRecord.png" />
                    </span>
                  )}
              </span>
              <Link className="link" to={`/artist/${item.mkid}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }

  static defaultProps = {
    searchResults: []
  };

}
