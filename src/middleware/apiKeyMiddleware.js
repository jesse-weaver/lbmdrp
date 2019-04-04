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
  const buffer = new Buffer(requestKey);
  const encoded = buffer.toString('base64');

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
    app.locals.requestToken = `Bearer ${body.access_token}`;
    res.locals.requestToken = app.locals.requestToken;
    debug(body);
  });

  next();
};
