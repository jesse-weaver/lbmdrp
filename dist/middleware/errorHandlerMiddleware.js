'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorHandlerMiddleware = function () {
  function ErrorHandlerMiddleware() {
    _classCallCheck(this, ErrorHandlerMiddleware);
  }

  _createClass(ErrorHandlerMiddleware, [{
    key: 'attach',


    /**
    * default error handler middleware
    */
    value: function attach(expressApp) {
      // catch 404 and forward to error handler
      expressApp.use(function (req, res, next) {
        var err = new Error(req.url + ' Not Found');
        err.status = 404;

        // should render pretty 404 page here

        next(err);
      });

      // development error handler
      // will print stacktrace
      if (expressApp.get('env') === 'development') {
        expressApp.use(function (err, req, res, next) {
          res.status(err.status || 500);
          res.render('error', {
            message: err.message,
            error: err
          });
        });
      }

      // production error handler
      // no stacktraces leaked to user
      expressApp.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: {}
        });
      });
    }
  }]);

  return ErrorHandlerMiddleware;
}();

// error handlers


exports.default = ErrorHandlerMiddleware;
//# sourceMappingURL=errorHandlerMiddleware.js.map