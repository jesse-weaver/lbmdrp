import React from 'react';
import { connect } from 'react-redux';
import ArtistDetails from './ArtistDetails.jsx';

const mapStateToProps = (state) => {
    return {
      artistName: state.artistDetails && state.artistDetails.name || " ",
    //   artistImage: state.artistDetails && state.artistDetails.images || " ",
      genres: state.artistDetails && state.artistDetails.genres || " ",
    };
  };

const ArtistDetailsContainer = connect(mapStateToProps)(ArtistDetails);

export default ArtistDetailsContainer;
