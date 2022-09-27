import request from 'request';
import logger from 'debug';
import express from 'express';
import apiKeys from '../../apiKeys.json';
import Authorization from '../controllers/library/authorization';

const app = express();
const debug = logger('lbmdrop:middleware');

export default (req, res, next) => {
  // Only request token if we don't have one or its expired
  console.log('app.locals.userIsLoggedIn', req.app.locals.userIsLoggedIn);
  console.log('app.locals.userToken', req.app.locals.userToken);
  const date = new Date();
  if (req.app.locals.requestToken && date < req.app.locals.tokenExpire) {
    console.log("Returning cached API Token")
    res.locals.requestToken = req.app.locals.requestToken;
    return next();
  }

  // If the token needs to be requested make sure that it's not a user auth token
  if (req.app.locals.userIsLoggedIn) {
    if (req.app.locals.userToken && date > req.app.locals.tokenExpire) {
      //  we need to attempt to refresh the user auth token
      console.log("User API token should be refreshed");
      Authorization.refreshToken(req);
    }
  }

  const clientId = apiKeys.spotify.clientId;
  const clientSecret = apiKeys.spotify.secret;
  const requestKey = `${clientId}:${clientSecret}`;
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

  console.log("Requesting global api token")
  request(requestOptions, (err, response, body) => {
    if (err) throw err;

    req.app.locals.requestToken = `Bearer ${body.access_token}`;
    
    // Store token and expiration time
    res.locals.requestToken = req.app.locals.requestToken;
    date.setTime(date.getTime() + 59 * 60 * 1000);
    req.app.locals.tokenExpire = date
    req.app.locals.clientId = clientId
    req.app.locals.clientSecret = clientSecret

    next();
  });
};
