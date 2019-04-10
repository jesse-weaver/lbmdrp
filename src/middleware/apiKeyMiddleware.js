import request from 'request';
import logger from 'debug';
import express from 'express';
import apiKeys from '../../apiKeys.json';

const app = express();
const debug = logger('lbmdrop:middleware');

export default (req, res, next) => {
  if (app.locals.requestToken) {
    res.locals.requestToken = app.locals.requestToken;
    return next();
  }
  const requestKey = `${apiKeys.spotify.clientId}:${apiKeys.spotify.secret}`;
  const encoded = Buffer.from(requestKey).toString('base64');
  console.log('request token: ', encoded);

  const requestOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    json: true,
    headers: {
      Authorization: `Basic ${encoded}`,
    },
    form: {
      grant_type: 'client_credentials',
    },
  };

  request(requestOptions, (err, response, body) => {
    if (err) throw err;
    app.locals.requestToken = `Bearer ${body.access_token}`;
    res.locals.requestToken = app.locals.requestToken;
    next();
  });
};
