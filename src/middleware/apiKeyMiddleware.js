import json from '/tmp/apiKeys.json';

export default (req, res, next) => {
  res.locals.apiKeys = json;
  next();
};
