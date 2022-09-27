import apiKeys from '../../../apiKeys.json';
import fetch from 'node-fetch';
const querystring = require('node:querystring');
const crypto = require('crypto');

// Create site config for these values
const authUrl = 'https://accounts.spotify.com';
const redirectUrl = 'http://localhost:3030/auth/login-callback';
const homeUrl = 'http://localhost:8080/';

/**
 * Handles the authorizaion flow via shopify API
 * https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
 */
export default class Authorization {

    /**
    * Search for artists based on artist name
    * @param {*} req Express request object
    * @param {*} res Express response object
    * 
    */
    static fetchAccessToken(req, code) {

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
        params.append("client_id", clientId);
        params.append("client_secret", clientSecret);
        authOptions["body"] = params;
        
        console.log("Requesting API Token")
        const requestUrl = `${authUrl}/api/token`
        fetch(requestUrl, authOptions)
          .then(result => result.json())
          .then((response) => {
            // Store token and expiration time
            console.log("Saved user API token");

            const date = new Date();
            date.setTime(date.getTime() + response.expires_in);
            req.app.locals.userTokenExpire = date;

            req.app.locals.userToken = `Bearer ${response.access_token}`;
            req.app.locals.userRefreshToken = `Bearer ${response.refresh_token}`;
            req.app.locals.userIsLoggedIn = true;

            res.redirect(homeUrl);
          })
          .catch((err) => {
            if (err) throw err;
          });
    }

    static async refreshToken(req) {
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
        
        try {
            const params = new URLSearchParams();
            params.append("grant_type", "refresh_token");
            params.append("refresh_token", req.app.locals.userRefreshToken);
            authOptions["body"] = params;
            
            console.log("Refreshing API Token");
            const requestUrl = `${authUrl}/api/token`;

            const response = await fetch(requestUrl, authOptions);
            console.log("refresh token response", response);
            const data = await response.json();

            // Store token and expiration time
            console.log("Saved user API token");

            const date = new Date();
            date.setTime(date.getTime() + data.expires_in);
            req.app.locals.userTokenExpire = date;
            req.app.locals.userToken = `Bearer ${data.access_token}`;
            req.app.locals.userIsLoggedIn = true;
        } catch (err) {
            req.app.locals.userIsLoggedIn = false;
            console.log("error while refreshing token");
            console.log(err);
        }
    }
}