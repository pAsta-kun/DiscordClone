const express = require('express');
const Post = require('../models/post'); 
const router = express.Router();
const dbConnect = require('../config/db');
const mongoose = require('mongoose');

// Get all posts
router.get('/', async (req, res) => {
    await dbConnect('DiscordCloneApp')
    try {
        const posts = await Post.find(); // Use the Post model
        res.json(posts); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); // Send error response
    } finally {
       mongoose.disconnect(); // Disconnect after the operation 
    }
});

router.post('/post', async (req, res) => {
    await dbConnect('DiscordCloneApp')
    // creates post for DB
    const newPost = new Post({
        title: req.query.title,
        content: req.query.content
    });
    try {
        // sends to DB
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
        mongoose.disconnect(); // Disconnect after the operation 
    }
});

module.exports = router;
