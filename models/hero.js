const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        comment: String,
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, //< - we want to make sure a review is always tied to a user
        userName: String,
        userAvatar: String
    },
    {
        timestamps: true,
    }
);

const heroSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        image: {
            type: String
        },
        primaryAttribute: {
            type: String,
        },
        secondaryAttribute: {
            type: String,
        },
        attackType: {
            type: String
        },
        abilityOne: {
            type: String,
        },
        ab1Name: {
            type: String
        },
        ab1Desc: {
            type: String
        },
        abilityTwo: {
            type: String,
        },
        ab2Name: {
            type: String
        },
        ab2Desc: {
            type: String
        },
        abilityThree: {
            type: String,
        },
        ab3Name: {
            type: String
        },
        ab3Desc: {
            type: String
        },
        abilityFour: {
            type: String,
        },
        ab4Name: {
            type: String
        },
        ab4Desc: {
            type: String
        },
        lore: {
            type: String,
        },
        comments: [commentSchema],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
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