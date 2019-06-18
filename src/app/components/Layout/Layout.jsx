import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.jsx';
import SearchBar from '../SearchBar/SearchBarContainer.jsx';
import layoutCss from './Layout.css';

const Layout = ({ displaySearchBar, children }) => (
  <div className="main">
    <div className="header">
      <Header />
    </div>
    {displaySearchBar && (<div className="search-bar"><SearchBar /></div>)}
    <div className="main-content">
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  displaySearchBar: PropTypes.bool,
  children: PropTypes.node,
};

Layout.defaultProps = {
  displaySearchBar: true,
  children: null,
};

export default Layout;
