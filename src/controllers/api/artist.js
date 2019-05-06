import fetch from 'node-fetch';
import { get } from 'lodash';
import logger from 'debug';

const debug = logger('lbmdrop:controllers:api:artist');
const baseUrl = 'https://api.spotify.com/v1';

export default class Artist {

  static searchArtists(req, res) {
    const query = get(req, 'query.q', '');
    const requestUrl = `${baseUrl}/search/?q=${query}&type=artist&limit=25`;

    fetch(requestUrl, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: res.locals.requestToken,
      },
    })
    .then(result => result.json())
    .then((response) => {
      const results = response.artists.items.map(artist => ({
        mkid: artist.id,
        name: artist.name,
        image: (artist.images && artist.images[0] && artist.images[0].url) || '',
      }));
      res.json(results);
    })
    .catch((err) => {
      debug('Error while trying to retrieve artists search: ', err);
      res.json({ error: 'bad response' });
    });
  }

  static fetchArtistDetails(artistId, res) {
    // https: //api.spotify.com/v1/{id}
    const requestUrl = `${baseUrl}/artists/${artistId}`;
    debug('requestURL: ', requestUrl);

    return fetch(requestUrl, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: res.locals.requestToken,
      },
    })
    .then(result => result.json())
    .then(artistDetails => ({
      name: artistDetails.name,
      id: artistDetails.id,
      spotify_uri: artistDetails.uri,
      images: artistDetails.images,
      genres: artistDetails.genres,
    }))
    .catch((err) => {
      debug('bad response from api/artist: ', err);
      throw err;
    });
  }

  static fetchArtistAlbums(artistId, res) {
    // https: //api.spotify.com/v1/{id}
    const requestUrl = `${baseUrl}/artists/${artistId}/albums?include_groups=album&limit=10`;
    debug('requestURL: ', requestUrl);

    return fetch(requestUrl, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: res.locals.requestToken,
      },
    })
    .then(result => result.json())
    .then((albums) => {
      const filteredFields = albums.items.map(album => ({
        name: album.name,
        release_date: album.release_date,
        external_urls: album.external_urls,
        total_tracks: album.total_tracks,
        href: album.href,
        images: album.images,
        spotify_uri: album.uri,
      }));
      return filteredFields;
    })
    .catch((err) => {
      debug('bad response from api/artist: ', err);
      throw err;
    });
  }

  static getArtistDetails(req, res) {
    const artistId = get(req.params, 'artistId', '');

    Promise.all([
      Artist.fetchArtistDetails(artistId, res),
      Artist.fetchArtistAlbums(artistId, res),
    ])
    .then(([details, albums]) => res.json({
      ...details,
      albums,
    }))
    .catch((err) => {
      debug('bad response from api/artist: ', err);
      throw err;
    });
  }
}
