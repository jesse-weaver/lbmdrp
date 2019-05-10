import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ARTIST_DETAILS_SUCCESS } from '../../ducks'
import artistDetailsCSS from './ArtistDetails.css';

export default class ArtistDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albumsExpanded: false,

    }
  }

  // this queries the api for data
  componentDidMount = () => {
    const { id } = this.props.match.params;
    const fetchUrl = `/api/artist-details/${id}`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then((results) => {
        this.props.dispatch({ type: ARTIST_DETAILS_SUCCESS, payload: results });
        return results;
      }).catch(err => {
        console.log(`Errors when fetching ${fetchUrl}:`, err);
      });
  }
//when clicked first time
  displayAllAlbums = () => {
    this.setState({
      albumsExpanded: !this.state.albumsExpanded,
    });
  }


  render() {
    const { albums } = this.props;
    const firstAlbums = albums.slice(0, 4);
    const remainingAlbums = albums.slice(4);
    return (
      <div className="artist-details">
        <div className="artist-name">{this.props.artistName}</div>
        <img className="artist-image" src={this.props.artistImage} />
        <div className="spotify-uri">
          <a href={this.props.spotifyUri}>Open in Spotify</a>
        </div>
        <div className="artist-albums">
          {firstAlbums.map((album) => (
            <div className="artist-album" key={album.name}>
              <img className="album-image" src={album.image} />
              <div className="album-name">{album.name}</div>
              <div className="release-date">{album.release_date}</div>
            </div>
          ))}
          <a className="more-albums" onClick={this.displayAllAlbums}>More Albums</a>

          {this.state.albumsExpanded && remainingAlbums.map((album) => (
            <div className="artist-album" key={album.name}>
              <img className="album-image" src={album.image} />
              <div className="album-name">{album.name}</div>
              <div className="release-date">{album.release_date}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
