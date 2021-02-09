const express = require('express');
const path = require('path');
const hbs = require('hbs');
const logger = require('morgan');
const bodyParser = require('body-parser');
const indexAboutRouter = require('./routes/indexAboutRouter');

// create express app
const app = express();

// middleware
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

// my routes: index and about pages
app.use('/', indexAboutRouter);

// for 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

module.exports = app;
