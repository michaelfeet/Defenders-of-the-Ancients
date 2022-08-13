const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        pAttribute: {
            type: String,
            required: true
        },
        sAttribute: {
            type: String,
            required: true
        },
        abilityOne: {
            type: String,
            required: true
        },
        abilityTwo: {
            type: String,
            required: true
        },
        abilityThree: {
            type: String,
            required: true
        },
        abilityFour: {
            type: String,
            required: true
        },
        lore: {
            type: String,
            required: true
        },
        // USER MODEL
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Hero', heroSchema);