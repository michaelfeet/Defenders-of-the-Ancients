const Hero = require('../models/hero');

module.exports = {
    index,
    new: newHero,
    create: createHero,
    show:showHero,
    delete: deleteHero,
    edit: editHero,
    update: updateHero
}

function index(req, res) {
    Hero.find({}, function(err, allHeros) {
        if(err) {
            res.send('error all heros')
        }
        res.render('heros/index.ejs', {
            heros: allHeros
        })
    })
}

function newHero(req, res) {
    res.render('heros/new.ejs')
}

function createHero(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar
    // console.log(req)
    // const image = {
    //     img: {
    //         data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.body.image)),
    //         contentType: 'image/png'
    //     }
    // }

    // req.body.image = image
    

    Hero.create(req.body, function(err, heroDoc){        
        if (err) {
            return res.render("heros/new.ejs");
        }
        res.redirect(`/heros/${heroDoc._id}`);
    })
}

function showHero(req, res) {
    Hero.findById(req.params.id, function(err, heroDoc) {
        res.render('heros/show', {
            hero: heroDoc
        })
    })
}

function deleteHero(req, res) {
    Hero.findByIdAndDelete(req.params.id, function(err, heroDoc){
        res.redirect('/heros')
    })
}

function editHero(req, res) {
    Hero.findById(req.params.id, function(err, heroDoc) {
        res.render('heros/edit.ejs', {
            hero: heroDoc
        })
    })
}

function updateHero(req, res) {
    Hero.findByIdAndUpdate(req.params.id, req.body, function(err, heroDoc) {
        heroDoc.save(function(err) {
            res.redirect(`/heros/${heroDoc._id}`)
        })
    })
}