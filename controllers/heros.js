const Hero = require('../models/hero');

module.exports = {
    index,
    new: newHero,
    create,
    show
}

function index(req, res) {
    Hero.find({}, function(err, allHeros) {
        if(err) {
            res.send('error all heros')
        }
        console.log(allHeros, 'all heros')
        res.render('heros/index.ejs', {
            heros: allHeros
        })
    })
}

function newHero(req, res) {
    res.render('heros/new.ejs')
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar
    
    Hero.create(req.body, function(err, heroDoc){        
        if (err) {
            console.log(err, "<- err in create hero")
            return res.render("heros/new.ejs");
        }
        res.redirect(`/heros/${heroDoc._id}`);
    })
}

function show(req, res) {
    Hero.findById(req.params.id, function(err, heroDoc) {
        console.log(heroDoc, 'show page')
        res.render('heros/show', {
            hero: heroDoc
        })
    })
}