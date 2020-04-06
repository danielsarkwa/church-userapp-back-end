// dependencies
const express = require('express');
const router = express.Router();
const _lodash = require('lodash');
const valObjId = require('../../lib/middlewares/validateObjectId');
const eventModel = require('../../lib/models/events.schema');


router.get('/', async (req, res) => {
    const events = await eventModel.find({});
    if (events.length > 0) {
        const eventList = [];
        events.forEach(event => {
            const listData = _lodash.pick(event, ['_id', 'viewColor', 'title', 'coverImg', 'date', 'time', 'stats', 'commentsData.totalCmts', 'messagesData.totalMsgs']);
            eventList.push(listData);
        });
        return res.status(200).send(eventList);
    } else {
        return res.status(404).send('event not found');
    };
});


router.get('/:id', [valObjId], async (req, res) => {
    const eventDetails = await eventModel.findById(req.params.id);
    if(eventDetails) {
        return res.status(200).send(eventDetails);
    } else {
        return res.status(404).send('Specified event not found');
    };
});


module.exports = router;