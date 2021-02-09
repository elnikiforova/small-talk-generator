const express = require('express');
const router = express.Router();

const indexAboutController = require('../controllers/indexAboutController');

router.get('/', indexAboutController.indexGet);
router.get('/about', indexAboutController.aboutGet);

module.exports = router;
