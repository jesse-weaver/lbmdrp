import React, {Component} from 'react';
import search from './searchresults.css';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      query: ''
    }
  }


  handleClick = () => {
    const query = this.searchInput.value;
    this.handleFetch(query);
  }



  render() {
   const results={"mkid":100399541,"name":"Taylor Swift","image":"https://graph.facebook.com/19614945368/picture?width=600"};
    return (
      <div className="results">
        <div className="artist-name">{results.name}</div>
        <div className="artist-image"><img src={results.image}/></div>
      </div>
    );
  }
}
