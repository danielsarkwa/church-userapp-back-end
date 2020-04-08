// dependencies
const express = require('express');
const router = express.Router();
const _lodash = require('lodash');
const valObjId = require('../../lib/middlewares/validateObjectId');
const podcastModel = require('../../lib/models/podcasts.schema');
const folderModel = require('../../lib/models/shared/folders.schema');


router.get('/', async (req, res) => {
    const channels = await folderModel.find({'belongsTo': 'podcast'});
    if (channels.length > 0) {
        const channelList = [];
        channels.forEach(channel => {
            const listData = _lodash.pick(channel, ['_id', 'title', 'coverImg', 'numberOfFiles', 'createdAt', 'stats']);
            channelList.push(listData);
        });
        return res.status(200).json(channelList);
    } else {
        res.status(404).json('Channels not found');
    };
});


router.get('/channels/one/:id', [valObjId], async (req, res) => {
    const channelDetails = await folderModel.findById(req.params.id);
    if(channelDetails) {
        return res.status(200).json(channelDetails);
    } else {
        res.status(404).json('Specified channel not found');
    };
});


router.get('/:id', [valObjId], async (req, res) => {
    const state = req.query.state;
    const podcastDetails = await podcastModel.findById(req.params.id);
    if(podcastDetails) {
        if (state == 'details') {
            // this is used when the a single podcast is opened
            return res.status(200).json(podcastDetails);
        } else {
            // this is used by the front-end to load podcast of a channel on by one
            const listData = _lodash.pick(podcastDetails, ['_id', 'title', 'channelId', 'coverImg', 'details.speaker.guests', 'stats']);
            return res.status(200).json(listData);
        }
    } else {
        res.status(404).json('Specified sermon not found');
    };
});


module.exports = router;