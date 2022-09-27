import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FollowedArtistsCss from './FollowedArtists.css';
import { Link } from 'react-router-dom';


const FollowedArtists = (props) => {

  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      return;
    }
    const fetchUrl = '/api/homepage/followed-artists';

    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        const results = await response.json();
        setIsLoaded(true)
        if (results.artists)
        props.onFollowedArtistsResults(results.artists);
        console.log("results - ", results)
        return results;
      } catch(err) {
        console.log('Error while trying to retrieve user playlists', err);
      }
    }

    fetchData()
      .catch(console.error);
  })

  const { followedArtists } = props;
  if (!Array.isArray(followedArtists.items)) {
    return (<div></div>)
  }

  return (
    <div className="followed-artist-container">
      <h3>Following</h3>
      <ul>
        {followedArtists && followedArtists.items && followedArtists.items.map(artist => (
          <li className="followed-artist" key={artist.name}>{artist.name}</li>
        ))
        }
      </ul>
    </div>
  );
  
}

// FollowedArtists.propTypes = {
//   FollowedArtists: PropTypes.arrayOf(
//     PropTypes.object,
//   ).isRequired,
// };

// FollowedArtists.defaultProps = {
//   FollowedArtists: [],
// };

export default FollowedArtists;
