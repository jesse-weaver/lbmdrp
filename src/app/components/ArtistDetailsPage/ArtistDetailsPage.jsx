import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout.jsx';
import { useLocation } from 'react-router-dom';
import { ARTIST_DETAILS_SUCCESS } from '../../ducks';
import artistDetailsCSS from './ArtistDetailsPage.css';
import ThumbnailCard from '../ThumbnailCard/ThumbnailCard.jsx';

const ArtistDetailsPage = (props) => {

  const location = useLocation();

  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      return;
    }
    const id = location.pathname.replace("/artist/", "")
    const fetchUrl = `/api/artist-details/${id}`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then((results) => {
        setIsLoaded(true)
        props.dispatch({ type: ARTIST_DETAILS_SUCCESS, payload: results });
        return results;
      }).catch(err => {
        console.log(`Errors when fetching ${fetchUrl}:`, err);
      });
  })

  const { albums } = props;

  return (
    <Layout
      displaySearchBar={true}
    >
      <div className="artist-details">
        <div className="artist-info">
          <div className="artist-name">{props.artistName}</div>
          <img className="artist-image" src={props.artistImage} />
          <div className="spotify-uri">
            <a href={props.spotifyUri}>Open in Spotify</a>
          </div>
        </div>
        <div className="artist-albums">
          {albums.map((album) => (
            <div className="artist-album" key={album.spotify_uri}>
              <ThumbnailCard
                key={album.spotify_uri}
                title={album.name} 
                subtitle={album.release_date}
                image={album.image}
                href={album.spotify_uri}  
              />
          </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}


export default ArtistDetailsPage;
