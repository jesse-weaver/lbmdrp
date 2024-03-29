import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout.jsx';
import ThumbnailCard from '../ThumbnailCard/ThumbnailCard.jsx';
import searchResultsPageCss from './SearchResultsPage.css';

const SearchResultsPage = ({ searchResults }) => {
  const query = searchResults.query || null;
  const results = searchResults.results || [];
  return (
    <Layout displaySearchBar>
      <div className="search-results">
        {!results.length && (
          <div>No Artists Found for Search: {query}</div>
        )}
        {results.map(item => (
          <div className="search-result-item" key={item.mkid}>
            <ThumbnailCard
              key={item.mkid}
              title={item.name}
              image={item.image}
              href={`/artist/${item.mkid}`}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

SearchResultsPage.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

SearchResultsPage.defaultProps = {
  searchResults: [],
};

export default SearchResultsPage;
