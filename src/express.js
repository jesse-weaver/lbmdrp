import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import favicon from 'express-favicon';
// import webpackDevMiddleware from "webpack-dev-middleware";
import webpack from "webpack";
import webpackConfig from "../webpack.config";
import { ErrorHandlerMiddleware } from './middleware/errorHandlerMiddleware';
import apiKeyMiddleware from './middleware/apiKeyMiddleware';

import Index from './controllers/index';
import Search from './controllers/search';
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

app.use(apiKeyMiddleware);
app.use(favicon('public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/api/artist', ArtistClient.searchArtists);
app.use('/', Index.home);

module.exports = app;
