import apiKeys from '../../../apiKeys.json';
import fetch from 'node-fetch';
import express from 'express';
const querystring = require('node:querystring');
const crypto = require('crypto');

// Create site config for these values
const authUrl = 'https://accounts.spotify.com';
const redirectUrl = 'http://localhost:3030/auth/login-callback';
const homeUrl = 'http://localhost:8080/';
const app = express();

/**
 * Handles the authorizaion flow via shopify API
 * https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
 */
export default class SpotifyLogin {
    /**
    * Search for artists based on artist name
    * @param {*} req Express request object
    * @param {*} res Express response object
    * 
    * Example: /api/artists?q=<search term>
    */
    static spotifyAuthorize(req, res) {
        const state = crypto.randomBytes(16).toString('hex');
        const scopes = [
            "user-read-currently-playing",
            "user-follow-read",
            "user-follow-modify",
            "user-top-read",
            "playlist-modify-public",
            "playlist-read-private",
            "playlist-modify-private",
            "user-library-read",
        ]
        const requestUrl = `${authUrl}/authorize?` + querystring.stringify({
            response_type: 'code',
            client_id: apiKeys.spotify.clientId,
            scope: scopes.join(" "),
            redirect_uri: redirectUrl,
            state: state
        });
        req.app.locals.initialState = state;
        res.redirect(requestUrl)
    }

    /**
    * Search for artists based on artist name
    * @param {*} req Express request object
    * @param {*} res Express response object
    * 
    * Example: /api/artists?q=<search term>
    */
    static loginCallback(req, res) {
        const code = req.query.code || null;
        const state = req.query.state || null;

        if (state === null || state != req.app.locals.initialState) {
            console.log("Error: state mismatch when trying to authorize")
            res.redirect('/#' +
                querystring.stringify({
                    error: 'state_mismatch'
                }));
            return;
        }

        const clientId = apiKeys.spotify.clientId;
        const clientSecret = apiKeys.spotify.secret;
      
        const requestKey = `${clientId}:${clientSecret}`;
        const encoded = Buffer.from(requestKey).toString('base64');
        let authOptions = {
            method: "POST",
            headers: {
                Authorization: `Basic ${encoded}`,
            },
            json: true
        };        

        const params = new URLSearchParams();
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", redirectUrl);
        params.append("client_id", apiKeys.spotify.clientId);
        params.append("client_secret", apiKeys.spotify.clientSecret);
        authOptions["body"] = params;
        
        console.log("Requesting API Token")
        const requestUrl = `${authUrl}/api/token`
        fetch(requestUrl, authOptions)
          .then(result => result.json())
          .then((response) => {
            // Store token and expiration time
            console.log("Saved user API token");

            req.app.locals.userToken = `Bearer ${response.access_token}`;
            req.app.locals.userRefreshToken = `Bearer ${response.refresh_token}`;
            req.app.locals.userIsLoggedIn = true;
            const date = new Date();
            date.setTime(date.getTime() + response.expires_in);
            req.app.locals.userTokenExpire = date;
            console.log('app.locals.userIsLoggedIn', req.app.locals.userIsLoggedIn);
            console.log('app.locals.userToken', req.app.locals.userToken);
            res.redirect(homeUrl);
          })
          .catch((err) => {
            if (err) throw err;
          });
    }

    static testPost(req, res) {
        console.log('Got body:', req.body);
        res.sendStatus(200);
    }    
}