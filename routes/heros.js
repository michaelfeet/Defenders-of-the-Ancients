const express = require('express');
const router = express.Router();
const heroCtrl = require('../controllers/heros');
const isLoggedIn = require('../config/auth');

router.get('/', heroCtrl.index);
router.get('/new', isLoggedIn, heroCtrl.new)
router.get('/:id', heroCtrl.show)
router.post('/', isLoggedIn, heroCtrl.create)
router.delete('/:id', isLoggedIn, heroCtrl.delete)
router.get('/:id/edit', isLoggedIn, heroCtrl.edit)
router.put('/:id', isLoggedIn, heroCtrl.update)

module.exports = router;