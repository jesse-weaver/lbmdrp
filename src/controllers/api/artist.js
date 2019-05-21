import fetch from 'node-fetch';
import { get, uniqBy } from 'lodash';
import logger from 'debug';

const debug = logger('lbmdrop:controllers:api:artist');
const baseUrl = 'https://api.spotify.com/v1';

export default class Artist {

  /**
   * Search for artists based on artist name
   * @param {*} req Express request object
   * @param {*} res Express response object
   */
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
      // response.artists.items.forEach((artist) => {
      //   console.log(artist.images);
      // });

      const results = response.artists.items.map(artist => ({
        mkid: artist.id,
        name: artist.name,
        image: Artist.getImage(artist.images, 200, 400) || '',
      }));
      res.json(results);
    })
    .catch((err) => {
      debug('Error while trying to retrieve artists search: ', err);
      res.json({ error: 'bad response' });
    });
  }

  /**
   * Fetch artist details for a given artist ID
   * @param {*} artistId Spotify artist ID
   * @param {*} res Express response object
   */
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
      image: Artist.getImage(artistDetails.images, 300, 650),
      genres: artistDetails.genres,
    }))
    .catch((err) => {
      debug('bad response from api/artist: ', err);
      throw err;
    });
  }

  /**
   * Fetch the albums for a given artist ID
   * @param {*} artistId Spotify artist ID
   * @param {*} res Express response object
   */
  static fetchArtistAlbums(artistId, res) {
    // https: //api.spotify.com/v1/{id}
    const requestUrl = `${baseUrl}/artists/${artistId}/albums?include_groups=album&limit=20&country=US`;
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
        image: Artist.getImage(album.images, 150, 300),
        spotify_uri: album.uri,
      }));
      return uniqBy(filteredFields, 'name');
    })
    .catch((err) => {
      debug('bad response from api/artist: ', err);
      throw err;
    });
  }

  /**
   * Utility function to pull a specific image based on width
   * @param {*} images Array of images
   * @param {*} imageSize Specified width of image to pull
   */
  static getImage(images, minimumImageSize, maximumImageSize) {
    if (!Array.isArray(images)) {
      return null;
    }
    const largeImage = images.filter(image => image.width >= minimumImageSize && image.width <= maximumImageSize);
    return largeImage.length ? largeImage.shift().url : null;
  }

  /**
   * Returns the artist details and albums for an artist based on artist ID
   * @param {*} req Express request object
   * @param {*} res Express response object
   */
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
