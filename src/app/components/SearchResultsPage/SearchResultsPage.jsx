import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout.jsx';
import ThumbnailCard from '../ThumbnailCard/ThumbnailCard.jsx';
import searchResultsPageCss from './SearchResultsPage.css';

const SearchResultsPage = ({ searchResults }) => (
  <Layout displaySearchBar>
    <div className="search-results">
      {!searchResults.length && (
        <div>No Artists Found</div>
      )}
      {searchResults.map(item => (
        <div className="search-result-item">
          <ThumbnailCard
            title={item.name}
            image={item.image}
            href={`/artist/${item.mkid}`}
          />
        </div>
      ))}
    </div>
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
