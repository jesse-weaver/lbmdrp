import request from 'request';
import { get } from 'lodash';
import logger from 'debug';

const debug = logger('lbmdrop:controllers:api:artist');
const baseUrl = 'https://api.spotify.com/v1';

export default class Artist {

  static searchArtists(req, res) {
    const query = get(req, 'query.q', '');
    const requestUrl = `${baseUrl}/search/?q=${query}&type=artist&limit=25`;

    const requestOptions = {
      url: requestUrl,
      json: true,
      headers: {
        Authorization: res.locals.requestToken,
      },
    };

    const callback = (err, response, body) => {
      if (err) {
        debug('Error while trying to retrieve artists search');
        throw (err);
      }

      if (response.statusCode !== 200) {
        debug(`bad response from api/artist: ${response.statusCode}`);
        debug(`requestUrl: ${requestOptions.url}`);
        debug(`response body:`, response.body);
        res.json({ error: 'bad response' });
      }

      const results = body.artists.items.map(artist => ({
        mkid: artist.id,
        name: artist.name,
        image: artist.images && artist.images[0] && artist.images[0].url || '',
      }));
      res.json(results);
    };

    request(requestOptions, callback);
  }

  static getArtistDetails(req, res) {
    const artistId = get(req.params, 'artistId', '');
    // https: //api.spotify.com/v1/{id}
    const requestUrl = `${baseUrl}/artists/${artistId}`;
    debug('requestURL: ', requestUrl);

    const requestOptions = {
      url: requestUrl,
      json: true,
      headers: {
        Authorization: res.locals.requestToken,
      },
    };

    const callback = (err, response, body) => {
      if (err) {
        debug('Error while trying to retrieve artists search');
        throw (err);
      }

      if (response.statusCode !== 200) {
        debug(`bad response from api/artist: ${response.statusCode}`);
        debug(`requestUrl: ${requestOptions.url}`);
        debug(`response body:`, response.body);
        res.json({
          error: 'bad response',
        });
        return;
      }
      res.json(body);
    };

    request(requestOptions, callback);
  }
}
