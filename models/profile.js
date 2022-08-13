const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
    {
    name: String,
    avatar: String,
    heros: [{type: Schema.Types.ObjectId, ref: 'Hero'}]
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model('Profile', profileSchema);