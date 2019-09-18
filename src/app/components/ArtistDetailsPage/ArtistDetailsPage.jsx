import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import { ARTIST_DETAILS_SUCCESS } from '../../ducks'
import artistDetailsCSS from './ArtistDetailsPage.css';
import ThumbnailCard from '../ThumbnailCard/ThumbnailCard.jsx';

export default class ArtistDetailsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albumsExpanded: false,

    }
    this.goBack = this.goBack.bind(this); 
  }
 
 goBack(){
     this.props.history.goBack();
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
    const AlbumCard = ({ album }) => (
      <div className="artist-album" key={album.name}>
        <a href={album.spotify_uri}><img className="album-image" src={album.image} /></a>
        <div className="album-name">{album.name}</div>
        <div className="release-date">{album.release_date}</div>
      </div>
    );
    return (
      <Layout
        displaySearchBar={false}
      >
        <div className="artist-details">
        <button onClick={this.goBack}>Go Back</button>
          <div artist-info>
            <div className="artist-name">{this.props.artistName}</div>
            <img className="artist-image" src={this.props.artistImage} />
            <div className="spotify-uri">
              <a href={this.props.spotifyUri}>Open in Spotify</a>
            </div>
          </div>
          <div className="artist-albums">
            {firstAlbums.map((album) => (
               <ThumbnailCard 
               title={album.name} 
               subtitle={album.release_date}
               image={album.image}
               href={album.spotify_uri}  
               />
            ))}

            {this.state.albumsExpanded && remainingAlbums.map((album) => (
              <AlbumCard album={album} />
            ))}
          </div>

          {remainingAlbums.length > 0 && (<div className="more-albums">
            <a onClick={this.displayAllAlbums}>
              {this.state.albumsExpanded ? 'Less' : 'More Albums'}</a>
          </div>)}
        </div>
      </Layout>
    )
  }
}
