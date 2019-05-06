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
    artistImage: getArtistImage(state.artistDetails.images),
    genres: state.artistDetails.genres || [],
  };
};

const ArtistDetailsContainer = connect(mapStateToProps)(ArtistDetails);

export default ArtistDetailsContainer;
