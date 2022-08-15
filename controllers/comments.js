const Hero = require('../models/hero')

module.exports = {
    create: createComment,
    delete: deleteComment
}

function createComment(req, res) {
    Hero.findById(req.params.id, function(err, heroDoc) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar

        heroDoc.comments.push(req.body)
        heroDoc.save(function(err) {
            res.redirect(`/heros/${req.params.id}`)
        })
    })
}

function deleteComment(req, res) {
    Hero.findOne(
        {
            'comments._id': req.params.id,
            'comments.user': req.user._id
        },
        function(err, heroDoc) {
            if(!heroDoc) {
                return res.redirect('/heros')
            }
            heroDoc.comments.remove(req.params.id)
            heroDoc.save()
            res.redirect(`/heros/${heroDoc._id}`)
        }
    )
}