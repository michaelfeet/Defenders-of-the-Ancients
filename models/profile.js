const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
    {
    name: String,
    avatar: String,
    hero: {ObjectId, ref:'Hero'}
    }
)

module.exports = mongoose.model('Profile', profileSchema);