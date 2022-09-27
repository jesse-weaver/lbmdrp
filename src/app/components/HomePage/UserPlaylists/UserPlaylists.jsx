import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserPlaylistsCss from './UserPlaylists.css';
import { Link } from 'react-router-dom';


const UserPlaylists = (props) => {

  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      return;
    }
    const fetchUrl = '/api/homepage/playlists';

    const fetchData = async () => {
      try {
        console.log("fetching data");
        const response = await fetch(fetchUrl);
        const results = await response.json();
        setIsLoaded(true)
        props.onPlaylistResults(results);
        return results;
      } catch(err) {
        console.log('Error while trying to retrieve user playlists', err);
      }
    }

    fetchData()
      .catch(console.error);
    console.log("I fetched it");
  })

  const { userPlaylists } = props;
  if (!Array.isArray(userPlaylists.items)) {
    console.log("should be returning nothing")
    return (<div></div>)
  }

  console.log("should be returning things");
  return (
    <div className="user-playlist-container">
      <h3>Playlists</h3>
      <ul>
        {userPlaylists && userPlaylists.items && userPlaylists.items.map(playlist => (
          <li className="playlist-item" key={playlist.name}>{playlist.name}</li>
        ))
        }
      </ul>
    </div>
  );
  
}

// UserPlaylists.propTypes = {
//   userPlaylists: PropTypes.arrayOf(
//     PropTypes.object,
//   ).isRequired,
// };

// UserPlaylists.defaultProps = {
//   userPlaylists: [],
// };

export default UserPlaylists;
