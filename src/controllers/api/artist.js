import request from 'request';
import { merge, get } from 'lodash';


const baseUrl = 'https://music-api.musikki.com/v1';

export default class Artist {

  static searchArtists(req, res) {
    const query = get(req, 'query.q', '');
    const requestUrl = `${baseUrl}/artists/?q=${query}&limit=50`;

    let requestOptions = {
      url: requestUrl,
      json: true,
      headers: res.locals.apiKeys.musikki
    };

    const callback = (err, response, body) => {
      if (err) {
        console.log(err);
        throw(err);
      }
      if (response.statusCode !== 200) {
        console.log(`requestUrl: ${requestOptions.url}`);
        console.log('bad response man: ' + response.statusCode);
      }
      let values = [];
      const results = body.results.map((result) => {
        return {
          mkid: result.mkid,
          name: result.name,
          image: result.image
        };
      });
      res.json(results);
    };

    request(requestOptions, callback);
  }
}
