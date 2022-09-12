import request from 'request';
import logger from 'debug';
import express from 'express';
import apiKeys from '../../apiKeys.json';

const app = express();
const debug = logger('lbmdrop:middleware');

export default (req, res, next) => {
  // Only request token if we don't have one or its expired
  const date = new Date()
  if (app.locals.requestToken || date < res.locals.tokenExpire) {
    res.locals.requestToken = app.locals.requestToken;
    return next();
  }
  const requestKey = `${apiKeys.spotify.clientId}:${apiKeys.spotify.secret}`;
  const encoded = Buffer.from(requestKey).toString('base64');

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
    
    // Store token and expiration time
    res.locals.requestToken = app.locals.requestToken;
    date.setTime(date.getTime() + 59 * 60 * 1000);
    res.locals.tokenExpire = date

    next();
  });
};
