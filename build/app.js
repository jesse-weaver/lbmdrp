'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _expressFavicon = require('express-favicon');

var _expressFavicon2 = _interopRequireDefault(_expressFavicon);

var _errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');

var _index = require('./controllers/index');

var _index2 = _interopRequireDefault(_index);

var _search = require('./controllers/search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import users from './controllers/users';


var app = (0, _express2.default)();

// view engine setup
app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
_nunjucks2.default.configure('views', {
    autoescape: true,
    express: app
});

app.use((0, _expressFavicon2.default)('public/images/favicon.ico'));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static('public'));

app.get('/', _index2.default.home);
app.use('/search', _search2.default.search);

module.exports = app;
//# sourceMappingURL=app.js.map