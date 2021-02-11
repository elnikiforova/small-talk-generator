const dotenv = require('dotenv');
dotenv.config();

const keys = {
  harvardKey: process.env.HARVARD_KEY,
  guardianKey: process.env.GUARDIAN_KEY,
  nasaKey: process.env.NASA_KEY,
  accuKey: process.env.ACCU_KEY,
};

module.exports.indexGet = (req, res) => {
  res.render('index', { title: 'small talk gen' });
}

module.exports.indexPost = (req, res, next) => {
  console.log('indexPost', req.body);
  res.json(keys);
}

module.exports.chooseGet = (req, res) => {
  res.render('choose', { title: 'choose your API' });
}

module.exports.choosePost = (req, res) => {
  console.log('choosePost', req.body);
  res.json(keys);
}

module.exports.aboutGet = (req, res) => {
  res.render('about', { title: 'about small talk' });
}
