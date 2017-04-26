'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = function () {
  function Search() {
    _classCallCheck(this, Search);
  }

  _createClass(Search, null, [{
    key: 'search',
    value: function search(req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({
        artists: ["tool", "toto", "toolshed", "radiohead", "eagles of death metal"]
      }));
    }
  }]);

  return Search;
}();

exports.default = Search;
//# sourceMappingURL=search.js.map