// const Hero = require('../models/hero');

module.exports = {
    index,
    new: newHero
}

function index(req, res) {
    res.render('heros/index.ejs')
}

function newHero(req, res) {
    res.render('heros/new.ejs')
}