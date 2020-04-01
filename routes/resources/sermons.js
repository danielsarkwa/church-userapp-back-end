// dependencies
const express = require('express');
const router = express.Router();

// import db schema

// handle routes
/**
 * sends the list of all sermons series
 */
router.get('/', (req, res) => {
    res.send('all series here');
});

/**
 * sends the list of sermons in a sermon series
 */
router.get('/series/one/:seriesId', (req, res) => {
    res.send('one series details here with lists');
});

/**
 * sends the details of a sermon
 */
router.get('/:sermonId', (req, res) => {
    res.send('one sermon details here');
});

/**
 * sends the list of all sermons
 */
router.get('/sermons/all', (req, res) => {
    res.send('all sermons here');
});


module.exports = router;