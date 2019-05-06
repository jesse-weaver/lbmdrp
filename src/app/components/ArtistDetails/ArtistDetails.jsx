import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ARTIST_DETAILS_SUCCESS } from '../../ducks'
import artistDetailsCSS from './ArtistDetails.css';

export default class ArtistDetails extends Component {

  constructor(props) {
    super(props);
  }

  // this queries the api for data
  componentDidMount = () => {
    const { id } = this.props.match.params;
    const fetchUrl = `/api/artist-details/${id}`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then((results) => {
        console.log(results);
        this.props.dispatch({ type: ARTIST_DETAILS_SUCCESS, payload: results });
        return results;
      }).catch(err => {
        console.log(`Errors when fetching ${fetchUrl}:`, err);
      });
  }


  render() {
    return (
      <div className="artist-details">
        <div className="artist-name">{this.props.artistName}</div>
        <div className="spotify-uri"><a href={this.props.spotifyUri}>open in spotify</a></div>
        <img className="artist-image" src={this.props.artistImage}/>
        {this.props.albums.map((album) => (
          <div className="artist-album-container"key={album.name}>
            <img className="album-image"src={album.image}></img>
            <div className="release-date">{album.release_date}</div>
            {album.name}
          </div>
        ))}
      </div>
    )
  }
}
