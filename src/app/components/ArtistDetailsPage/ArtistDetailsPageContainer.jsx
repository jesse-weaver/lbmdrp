import React from 'react';
import { connect } from 'react-redux';
import ArtistDetailsPage from './ArtistDetailsPage.jsx';

const mapStateToProps = (state) => {
  return {
    artistName: state.artistDetails.name || '',
    spotifyUri: state.artistDetails.spotify_uri || '',
    artistImage: state.artistDetails.image || '',
    albums: state.artistDetails.albums || [],
  };
};

const ArtistDetailsPageContainer = connect(mapStateToProps)(ArtistDetailsPage);

export default ArtistDetailsPageContainer;
