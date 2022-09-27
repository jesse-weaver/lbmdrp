import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout.jsx';
import UserPlaylists from './UserPlaylists/UserPlaylistsContainer';
import HomePageCss from './HomePage.css';
import { Link } from 'react-router-dom';
import FollowedArtists from './FollowedArtists/FollowedArtistsContainer';

const HomePage = (props) => {
  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      return;
    }
    const fetchUrl = '/api/homepage/is-logged-in';

    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        const results = await response.json();
        setIsLoaded(true)
        const isLoggedIn = results.logged_in || false;
        props.onIsLoggedIn(isLoggedIn);
        return results;
      } catch(err) {
        console.log('Error while trying to retrieve user playlists', err);
      }
    }

    fetchData()
      .catch(console.error);
  })

  const { isLoggedIn } = props;  
  return (
    <Layout displaySearchBar>
      
        {!isLoggedIn && 
        <div className="home-page-container">
          <div id="login">
            <a className="home-page" href="/auth/spotify-login"><img src="/assets/images/connect_with_spotify.png" className="spotify-login"/></a>
          </div>
        </div>
        }
        {isLoggedIn && (
          <div className="home-page-container">
            <div id="now-playing"></div>
            <div id="playlists"><UserPlaylists /></div>
            <div id="releases"></div>
            <div id="following"><FollowedArtists /></div>
          </div>
        )}
    </Layout>
  );
}

HomePage.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

HomePage.defaultProps = {
  searchResults: [],
};

export default HomePage;
