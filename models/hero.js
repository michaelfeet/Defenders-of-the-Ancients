const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
      comment: String,
      user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}, //< - we want to make sure a review is always tied to a user
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
        comments: [commentSchema],
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