// dependencies
const express = require('express');
const router = express.Router();
const _lodash = require('lodash');
const valObjId = require('../../lib/middlewares/validateObjectId');
const feedModel = require('../../lib/models/feeds.schema');


router.get('/', async (req, res) => {
    const feeds = await feedModel.find({});
    if (feeds.length > 0) {
        const feedsList = [];
        feeds.forEach(feed => {
            const listData = _lodash.pick(feed, ['_id', 'title', 'coverImg', 'details.autuorId', 'details.to', 'createdAt', 'stats']);
            feedsList.push(listData);
        });
        return res.status(200).json(feedsList);
    } else {
        return res.status(404).json('Feeds not found');
    };
});


router.get('/:id', [valObjId], async (req, res) => {
    const state = req.query.state;
    const feedsDetails = await feedModel.findById(req.params.id);
    if(feedsDetails) {
        return res.status(200).json(feedsDetails);
    } else {
        return res.status(404).json('Specified sermon not found');
    };
});


module.exports = router;