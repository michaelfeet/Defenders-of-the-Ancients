// const Hero = require('../models/hero');

module.exports = {
    index
}

function index(req, res) {
    res.render('heros/index.ejs')
}