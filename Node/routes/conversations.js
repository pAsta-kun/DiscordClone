const express = require('express');
const Conversation = require('../models/conversation'); 
const router = express.Router();
const dbConnect = require('../config/db');
const mongoose = require('mongoose');

// Get all convos
router.get('/', async (req, res) => {
    await dbConnect('DiscordCloneApp')
    try {
        const conversation = await Conversation.find({ users: req.body.userId }); // Use the convo model
        res.json(conversation); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); // Send error response
    } finally {
       mongoose.disconnect(); // Disconnect after the operation 
    }
});

router.post('/create', async (req, res) => {
    await dbConnect('DiscordCloneApp')
    // creates post for DB
    const newConversation = new Conversation({
        users: req.body.users
    });
    try {
        // sends to DB
        const savedConvo = await newConversation.save();
        res.status(201).json(savedConvo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
        mongoose.disconnect(); // Disconnect after the operation 
    }
});

module.exports = router;
