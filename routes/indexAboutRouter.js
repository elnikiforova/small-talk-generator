const express = require('express');
const router = express.Router();

const indexAboutController = require('../controllers/indexAboutController');

router.get('/', indexAboutController.indexGet);
router.post('/', indexAboutController.indexPost);
router.get('/choose', indexAboutController.chooseGet);
router.post('/choose', indexAboutController.choosePost);
router.get('/about', indexAboutController.aboutGet);

module.exports = router;
