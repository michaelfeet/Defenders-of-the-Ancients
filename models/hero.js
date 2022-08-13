const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        primaryAttribute: {
            type: String,
        },
        secondaryAttribute: {
            type: String,
        },
        attackType: {
            type:String
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