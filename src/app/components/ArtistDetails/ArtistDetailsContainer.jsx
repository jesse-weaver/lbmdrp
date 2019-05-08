import React from 'react';
import { connect } from 'react-redux';
import ArtistDetails from './ArtistDetails.jsx';

const mapStateToProps = (state) => {
  return {
    artistName: state.artistDetails.name || '',
    spotifyUri: state.artistDetails.spotify_uri || '',
    artistImage: state.artistDetails.image || '',
    albums: (state.artistDetails.albums && state.artistDetails.albums.slice(0, 8)) || [],
  };
};

const ArtistDetailsContainer = connect(mapStateToProps)(ArtistDetails);

export default ArtistDetailsContainer;
