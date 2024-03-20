const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
const friendRoutes = require('./routes/friends');
const convoRoutes = require('./routes/conversations')

const app = express();
const port = 3000; 

app.use(bodyParser.json());
app.use(express.json());

// Sets up routes
app.use('/posts', postRoutes);
app.use('/user', userRoutes)
app.use('/friend', friendRoutes)
app.use('/convos', convoRoutes)

app.listen(port, () => console.log(`Server listening on port ${port}`));
