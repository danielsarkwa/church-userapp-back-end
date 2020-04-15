// dependencies
const express = require('express');
const router = express.Router();
const _lodash = require('lodash');
const valObjId = require('../../lib/middlewares/validateObjectId');
const eventModel = require('../../lib/models/events.schema');


// the app always gets the current week events by default
router.get('/', async (req, res) => {
    const getData = req.body;
    const events = await eventModel
        .find({
            'date.yr': { $eq: getData.from.yr },
            'date.mon': { $eq: getData.from.mon },
            'date.day': { $gte: getData.from.day, $lte: getData.to.day }
        });
    if (events.length > 0) {
        const eventList = [];
        events.forEach(event => {
            const listData = _lodash.pick(event, ['_id', 'viewColor', 'title', 'coverImg', 'date', 'time', 'stats', 'commentsData.totalCmts', 'messagesData.totalMsgs']);
            eventList.push(listData);
        });
        return res.status(200).json(eventList);
    } else {
        return res.status(404).json('event not found');
    };
});


router.get('/:id', [valObjId], async (req, res) => {
    const eventDetails = await eventModel.findById(req.params.id);
    if(eventDetails) {
        return res.status(200).json(eventDetails);
    } else {
        return res.status(404).json('Specified event not found');
    };
});


module.exports = router;