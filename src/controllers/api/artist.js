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
        debug(`requestUrl: ${requestOptions.url}`);
        debug(`bad response man: ${response.statusCode}`);
      }
      debug('body: ', body);
      const results = body.results.map(result => ({
        mkid: result.mkid,
        name: result.name,
        image: result.image,
      }));

      res.json(results);
    };

    request(requestOptions, callback);
  }
}
