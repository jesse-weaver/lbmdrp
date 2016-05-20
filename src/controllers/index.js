export default class Index {
  static home(req, res) {
    res.render('index.html', { title: 'Welcome to LBMDRP' });
  }
}
