module.exports.indexGet = (req, res) => {
  res.render('index', { title: 'small talk gen' });
}

module.exports.chooseGet = (req, res) => {
  res.render('choose', { title: 'choose your API' });
}

module.exports.aboutGet = (req, res) => {
  res.render('about', { title: 'about small talk' });
}
