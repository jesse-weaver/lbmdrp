import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ARTIST_DETAILS_SUCCESS } from '../../../ducks'
import artistDetailsCSS from './ArtistDetails.css';

export default class ArtistDetails extends Component {

  constructor(props) {
    super(props);
  }

  // this queries the api for data
  componentDidMount = () => {
    const { id } = this.props.match.params;
    console.log('artist id: ', id);
    const fetchUrl = `/api/artist-details/${id}`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then((results) => {
        console.log(results);
        this.props.dispatch({ type: ARTIST_DETAILS_SUCCESS, payload: results });
        return results;
      }).catch(err => {
        console.log(`Errors when fetching ${fetchUrl}:`, err);
      });
  }


  render() {
    return (
      <div className="artist-details">
        <div>{this.props.artistName}</div> 
        {/* <div>{this.props.artistImage}</div> */}
        <div>{this.props.genres}</div>
      </div>
    );
  }
}
