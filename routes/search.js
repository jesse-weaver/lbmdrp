var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
      artists: [
        "tool",
        "toto",
        "toolshed",
        "radiohead",
        "eagles of death metal"
      ]
  }));
});

module.exports = router;
