import React, { Component } from 'react';
import search from './search.css';

export default class Search extends Component {

  handleClick = () => {
    console.log('this is crazy');
  }

  render() {
    return (
    <div className="search">
          <input className="searchbox" name="q" type="text" size="40" placeholder="Search Artists..." />
          <button className="searchbutton" name="search" value="search" onClick={this.handleClick} />
    </div>
    );
  }
}
