import React, { Component, PropTypes } from 'react';
import search from './search.css';

export default class Search extends Component {

  static propTypes = {
    handleSearch: PropTypes.func,
  }

  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.searchInput.value);
  }

  render() {
    const {
      handleClick,
    } = this.props;

    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            className="searchbox"
            name="q"
            type="text"
            size="40"
            placeholder="Search Artists..."
            ref={(input) => { this.searchInput = input; }}
          />
          <input type="submit" className="searchbutton" name="search" value="Search" />
        </form>
      </div>
    );
  }
}
