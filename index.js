// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./lib/database/mongodb')();

// routes
const sermons = require('./routes/resources/sermons');
const podcasts = require('./routes/resources/podcasts');
const articles = require('./routes/resources/articles');

// route handlers
app.use('/api/sermons', sermons);
app.use('/api/podcasts', podcasts);
app.use('/api/articles', articles);

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// server
const port = process.env.PORT || 1000;
const server = app.listen(port, () => console.log(`mobile server app running on port ${port}`));
module.exports = server;
