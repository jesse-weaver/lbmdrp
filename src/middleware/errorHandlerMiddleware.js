
export default class ErrorHandlerMiddleware {

  /**
  * default error handler middleware
  */
  attach(expressApp) {
    // catch 404 and forward to error handler
    expressApp.use((req, res, next) => {
      const err = new Error(`${req.url} Not Found`);
      err.status = 404;
      // should render pretty 404 page here

      next(err);
    });

    // development error handler
    // will print stacktrace
    if (expressApp.get('env') === 'development') {
      expressApp.use((err, req, res) => {
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: err,
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    expressApp.use((err, req, res) => {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {},
      });
    });
  }
}

// error handlers
