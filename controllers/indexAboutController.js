module.exports.indexGet = (req, res) => {
  res.render('index', {title: 'small talk gen'});
}

module.exports.aboutGet = (req, res) => {
  res.render('about', {title: 'about small talk'});
}
