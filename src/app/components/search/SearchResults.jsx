import React, { Component } from 'react';
import search from './searchresults.css';

export default class Search extends Component {

  constructor(props) {
    super(props);
  }

  // this will render an individual artist
  // example object {"mkid":100399541,"name":"Taylor Swift","image":"https://graph.facebook.com/19614945368/picture?width=600"};
  renderItem = (artist) => {
    const {
      name,
      image,
      mkid,
    } = artist;

    return (
      <div className="result">
        <div className="artist-name">{name}</div>
        <div className="artist-image"><img src={image}/></div>
      </div>
    )
  }

  // this checks for results and renders the entire result list of artists
  render() {
    const { results } = this.props;

    let artists;
    if (results.length) {
      artists = results.map((artist, key) =>
        this.renderItem(artist)
      );
    }

    return (
      <div className="results">
        {artists}
      </div>
    );
  }
}
