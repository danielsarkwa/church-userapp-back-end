// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// routes
const sermons = require('./routes/resources/sermons');

// route handlers
app.use('/api/sermons', sermons);

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// server
const port = process.env.PORT || 1000;
const server = app.listen(port, () => console.log(`mobile server app running on port ${port}`));
module.exports = server;
