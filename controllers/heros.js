const Hero = require('../models/hero');

module.exports = {
    index,
    new: newHero,
    create,
    show
}

function index(req, res) {
    console.log('index page')
    res.render('heros/index.ejs')
}

function newHero(req, res) {
    console.log('create hero page')
    res.render('heros/new.ejs')
}

function create(req, res) {
    Hero.create(req.body, function(err, heroDoc) {
        console.log(req.body, 'create req.body')
        if(err) {
            return res.render('heros/new.ejs', heroDoc)
        }
        res.redirect('/heros')
    })
}

function show(req, res) {
    res.render('heros/show.ejs')
}