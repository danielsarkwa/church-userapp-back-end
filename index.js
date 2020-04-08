// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// db
require('./lib/database/mongodb')();

// middlewares
app.use(bodyParser.json());

// routes
const sermons = require('./routes/resources/sermons');
const podcasts = require('./routes/resources/podcasts');
const articles = require('./routes/resources/articles');
const feeds = require('./routes/resources/feeds');
const announcements = require('./routes/resources/announcements');
const events = require('./routes/resources/events');
const helpSupport = require('./routes/resources/help-support');
const user = require('./routes/resources/user');
const auth = require('./routes/resources/auth');

// route handlers
app.use('/api/sermons', sermons);
app.use('/api/podcasts', podcasts);
app.use('/api/articles', articles);
app.use('/api/feeds', feeds);
app.use('/api/announcements', announcements);
app.use('/api/events', events);
app.use('/api/helpSupport', helpSupport);
app.use('/api/user', user);
app.use('/api/auth', auth);

// server
const port = process.env.PORT || 1000;
const server = app.listen(port, () => console.log(`mobile server app running on port ${port}`));
module.exports = server;