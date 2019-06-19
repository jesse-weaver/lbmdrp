import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import searchResultsPageCss from './SearchResultsPage.css';

const SearchResultsPage = ({ searchResults }) => (
  <Layout displaySearchBar>
    <ul className="search-results">
      {!searchResults.length && (
        <div>No Artists Found</div>
      )}
      {searchResults.map(item => (
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

SearchResultsPage.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

SearchResultsPage.defaultProps = {
  searchResults: [],
};

export default SearchResultsPage;
