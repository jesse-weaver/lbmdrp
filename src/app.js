import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import nunjucks from 'nunjucks';
import favicon from 'express-favicon';
import { ErrorHandlerMiddleware } from './middleware/errorHandlerMiddleware';

import Index from './controllers/index';
import Search from './controllers/search';
// import users from './controllers/users';


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(favicon('public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', Index.home);
app.use('/search', Search.search);

module.exports = app;
