import request from 'request';
import { get } from 'lodash';
import logger from 'debug';

const debug = logger('controllers:api:artist');
const baseUrl = 'https://music-api.musikki.com/v1';

export default class Artist {

  static searchArtists(req, res) {
    const query = get(req, 'query.q', '');
    const requestUrl = `${baseUrl}/artists/?q=${query}&limit=50`;

    const requestOptions = {
      url: requestUrl,
      json: true,
      headers: res.locals.apiKeys.musikki,
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
