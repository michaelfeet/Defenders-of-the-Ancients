const express = require('express');
const router = express.Router();
const heroCtrl = require('../controllers/heros');
const isLoggedIn = require('../config/auth');

router.get('/', heroCtrl.index);

module.exports = router;