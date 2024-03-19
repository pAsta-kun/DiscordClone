const express = require('express');
const User = require('../models/user'); 
const router = express.Router();
const dbConnect = require('../config/db');
const mongoose = require('mongoose');
const Friend = require('../models/friend');



router.post('/add', async (req, res) => {
    await dbConnect('DiscordCloneApp')
    try {

        //pending friend is friend sending req
        const pendingFriend = new Friend({
            id: req.body.friendId
        });

        //friend thats getting request
        const incomingFriend = new Friend({
            id: req.body.userId,
            status: "Incoming"
        });

        // adding pending friend to friends list
        const updatedUser = await User.findByIdAndUpdate(
            req.body.userId, 
            { $push: { friends: pendingFriend} },
            { new: true }
        ); 
        // adding incoming reqest to friend 
        const updatedFriend = await User.findByIdAndUpdate(
            req.body.friendId, 
            { $push: { friends: incomingFriend} },
            { new: true }
        );

        res.status(201).json({ message: "Friend added!" }); // Or send back results 
    } catch (err) {
        res.status(400).json({ message: err.message }); 
    } 
});

module.exports = router;