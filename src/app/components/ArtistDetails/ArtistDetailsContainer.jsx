import React from 'react';
import { connect } from 'react-redux';
import ArtistDetails from './ArtistDetails.jsx';

const getArtistImage = (images) => {
  if (!Array.isArray(images)) {
    return '';
  }
  const largeImage = images.filter((image) => {
    return image.width == '640';
  });
  return largeImage.length ? largeImage.shift().url : null;
}

const mapStateToProps = (state) => {
  return {
    artistName: state.artistDetails.name || '',
    spotifyUri: state.artistDetails.spotify_uri || '',
    artistImage: getArtistImage(state.artistDetails.images),
    albums: state.artistDetails.albums && state.artistDetails.albums.slice(0, 4) || [],
  };
};

const ArtistDetailsContainer = connect(mapStateToProps)(ArtistDetails);

export default ArtistDetailsContainer;
