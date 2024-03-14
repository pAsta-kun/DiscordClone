const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    friends: {
        type: [String],
        default: [],
        required: false
    },
    status: {
        type: String, 
        enum: ['Online', 'Away', 'Do Not Disturb'],
        default: 'Online',
        required: false
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
}, { collection: 'Users' });
// userSchema.index({ username: 1, email: 1 }, { unique: true});

module.exports = mongoose.model('User', userSchema); 
