import React from 'react';
import { Link } from "react-router-dom";
import headerCss from './Header.css';

const Header = () => (
  <div className="header-main">
    <Link to="/">LBMDROP</Link>
  </div>
);

export default Header;
