import React, { Component } from 'react';
import search from './search.css';

export default class Search extends Component {
  render() {
    return (
    <div className="search">
          <input className="searchbox" name="q" type="text" size="40" placeholder="Search Artists..." />
          <input className="searchbutton" type="button" value="search"></input>
    </div>
    );
  }
}
