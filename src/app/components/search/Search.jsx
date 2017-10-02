import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
    <div className="SearchBar">
        <form method="get" action="/search" id="search">
          <input name="q" type="text" size="40" placeholder="Search Artists..." />
        </form>
    </div>
    );
  }
}
