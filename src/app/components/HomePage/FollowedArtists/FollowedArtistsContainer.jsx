import React from 'react';
import { connect } from 'react-redux';
import FollowedArtists from './FollowedArtists.jsx';
import { FOLLOWED_ARTISTS_SUCCESS } from '../../../ducks/actions.js';


const mapStateToProps = (state) => {
  return {
    followedArtists: state.followedArtists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFollowedArtistsResults: results => dispatch({ type: FOLLOWED_ARTISTS_SUCCESS, payload: results }),
  };
};

const FollowedArtistsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FollowedArtists);

export default FollowedArtistsContainer;
