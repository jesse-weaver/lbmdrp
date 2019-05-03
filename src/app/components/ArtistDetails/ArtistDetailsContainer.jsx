import React from 'react';
import { connect } from 'react-redux';
import ArtistDetails from './ArtistDetails.jsx';

const rightArtistImage = (images) => {
    if( ! Array.isArray(images)) {
        return '';
    }
    let bigImage = images.filter((image) => {
       return image.width == '640'; 
    }); 
    return bigImage[0].url; 
}

const mapStateToProps = (state) => {
    return {
      artistName: state.artistDetails.name || '',
      artistImage: rightArtistImage(state.artistDetails.images),
      genres: state.artistDetails.genres || [],
    };
  };

const ArtistDetailsContainer = connect(mapStateToProps)(ArtistDetails);

export default ArtistDetailsContainer;
