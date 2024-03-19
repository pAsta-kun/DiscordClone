const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    status: {
        type: String, 
        enum: ['Pending', 'Added', 'Incoming'],
        default: 'Pending',
        required: true
    },
}, { collection: 'Users' });

module.exports = mongoose.model('Friend', friendSchema); 
