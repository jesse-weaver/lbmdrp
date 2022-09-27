import React from 'react';
import { connect } from 'react-redux';
import { IS_LOGGED_IN_SUCCESS } from '../../ducks/actions.js';
import HomePage from './HomePage.jsx';


const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIsLoggedIn: results => dispatch({ type: IS_LOGGED_IN_SUCCESS, payload: results }),
  };
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default HomePageContainer;
