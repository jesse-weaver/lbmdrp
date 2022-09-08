import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import favicon from 'express-favicon';
import path from 'path';
// import webpackDevMiddleware from "webpack-dev-middleware";
// import webpack from "webpack";
// import webpackConfig from "../webpack.config";
// import { ErrorHandlerMiddleware } from './middleware/errorHandlerMiddleware';
import apiKeyMiddleware from './middleware/apiKeyMiddleware';

import ArtistClient from './controllers/api/artist';


const app = express();

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

const assets = path.join(__dirname, 'frontend/assets')
console.log("assets path: ", assets)

app.use("/assets", express.static(path.join(__dirname, 'frontend/assets')))
app.use("/js",express.static(path.join(__dirname, 'frontend/js')))

app.use(favicon('public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// API paths
app.get('/api/artist', apiKeyMiddleware, ArtistClient.searchArtists);
app.get('/api/artist-details/:artistId', apiKeyMiddleware, ArtistClient.getArtistDetails);

app.get('*', (req, res) => {
  console.log(path.join(__dirname, '/frontend/'));
  res.sendFile('index.html', {
    root: path.join(__dirname, '/frontend/'),
  });
});


module.exports = app;
