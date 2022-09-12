import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout.jsx';
import ThumbnailCard from '../ThumbnailCard/ThumbnailCard.jsx';
import HomePageCss from './HomePage.css';

const HomePage = ({ searchResults }) => (
  <Layout displaySearchBar>
    <div className="home-page">
      Welome to the thunderdome!
    </div>
  </Layout>
);

HomePage.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

HomePage.defaultProps = {
  searchResults: [],
};

export default HomePage;
