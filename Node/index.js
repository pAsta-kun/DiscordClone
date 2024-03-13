const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');
//const userRoutes = require('./routes/users');

const app = express();
const port = 3000; 

app.use(bodyParser.json());

app.use('/posts', postRoutes); // Mount post routes

app.listen(port, () => console.log(`Server listening on port ${port}`));
