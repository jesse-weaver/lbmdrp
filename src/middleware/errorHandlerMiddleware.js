
export default class ErrorHandlerMiddleware {

  /**
  * default error handler middleware
  */
  function attach(expressApp) {
    // catch 404 and forward to error handler
    expressApp.use(function(req, res, next) {
      let err = new Error(`${req.url} Not Found`);
      err.status = 404;

      // should render pretty 404 page here
      
      next(err);
    });

    // development error handler
    // will print stacktrace
    if (expressApp.get('env') === 'development') {
      expressApp.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: err
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    expressApp.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });
  }
}

// error handlers
