import React from 'react';
import { connect } from 'react-redux';
import UserPlaylists from './UserPlaylists.jsx';
import { USER_PLAYLISTS_SUCCESS } from '../../../ducks/actions.js';


const mapStateToProps = (state) => {
  return {
    userPlaylists: state.userPlaylists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPlaylistResults: results => dispatch({ type: USER_PLAYLISTS_SUCCESS, payload: results }),
  };
};

const UserPlaylistsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPlaylists);

export default UserPlaylistsContainer;
