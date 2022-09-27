
import express from 'express';
const fetch = require('node-fetch');
const lodash = require('lodash');
import logger from 'debug';

const debug = logger('lbmdrop:controllers:api:homepage');
const baseUrl = 'https://api.spotify.com/v1'; // add this to main config
const app = express();

export default class Homepage {

   /**
   * Check to see if the user is currently logged in and authorized
   * @param {*} req Express request object
   * @param {*} res Express response object
   * 
   * Example: /api/homepage/logged_in
   */
  static isUserLoggedIn(req, res) {
    const isLoggedIn = req.app.locals.isLoggedIn || false;
    res.json({logged_in: req.app.locals.userIsLoggedIn})
  }

  /**
   * Get all of the artists that the user is currently following
   * @param {*} req Express request object
   * @param {*} res Express response object
   * 
   * Example: /api/homepage/followed-artists
   */
  static async getFollowedArtists(req, res) {
    const requestUrl = `${baseUrl}/me/following?type=artist&limit=50`;

    if (!req.app.locals.userIsLoggedIn) {
      res.json({error: "user not logged in"});
      return;
    }
    const options = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: req.app.locals.userToken,
      },
    };
    try {
      const response = await fetch(requestUrl, options);
      const data = await response.json();
      console.log(data['items']);
      res.json(data);
    } catch (err) {
      debug('Error while trying to retrieve users followed artists ', err);
      res.json({ error: 'bad response' });
    }
  }

  /**
   * Get all of the artists that the user is currently following
   * @param {*} req Express request object
   * @param {*} res Express response object
   * 
   * Example: /api/homepage/playlists
   */
   static async getUserPlaylists(req, res) {
    const requestUrl = `${baseUrl}/me/playlists?limit=50`;

    if (!req.app.locals.userIsLoggedIn) {
      res.json({error: "user not logged in"});
      return;
    }
    const options = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: req.app.locals.userToken,
      },
    };
    try {
      const response = await fetch(requestUrl, options)
      const data = await response.json()
      const sortedPlaylists = lodash.sortBy(data.items, ['name']);
      data["items"] = sortedPlaylists;
      res.json(data);
    } catch (err) {
      debug('Error while trying to retrieve users playlists ', err);
      res.json({ error: 'bad response' });
    }
  }  
}
