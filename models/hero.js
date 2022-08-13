const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        pAttribute: {
            type: String,
        },
        sAttribute: {
            type: String,
        },
        abilityOne: {
            type: String,
        },
        abilityTwo: {
            type: String,
        },
        abilityThree: {
            type: String,
        },
        abilityFour: {
            type: String,
        },
        lore: {
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            // required: true
        },
        userName: {
            type: String
        },
        userAvatar: {
            type: String
        }
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Hero', heroSchema);