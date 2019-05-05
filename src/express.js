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

// const compiler = webpack({
//     // configuration
//     webpackConfig
// });

// console.log("webpack config:", webpackConfig());
// const compiler = webpack(webpackConfig);
//
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: "/"
// }));
app.use(express.static('public'));

app.use(favicon('public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.get('/api/artist', apiKeyMiddleware, ArtistClient.searchArtists);
app.get('/api/artist-details/:artistId', apiKeyMiddleware, ArtistClient.getArtistDetails);

app.get('*', (req, res) => {
  res.sendfile('index.html', {
    root: path.join(__dirname, '../public/'),
  });
});

module.exports = app;
