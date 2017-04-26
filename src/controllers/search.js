
export default class Search {

  static search(req, res) {
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
  }
}
