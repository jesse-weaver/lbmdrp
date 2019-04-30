import React from 'react';
import { connect } from 'react-redux';
import ArtistDetails from './ArtistDetails.jsx';


const ArtistDetailsContainer = connect()(ArtistDetails);

export default ArtistDetailsContainer;
