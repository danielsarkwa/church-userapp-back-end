// dependencies
const express = require('express');
const router = express.Router();
const _lodash = require('lodash');
const valObjId = require('../../lib/middlewares/validateObjectId');

const announcementModel = require('../../lib/models/announcements.schema');


router.get('/', async (req, res) => {
    const announcements = await announcementModel.find({});
    if (announcements.length > 0) {
        const announcementList = [];
        announcements.forEach(announcement => {
            const listData = _lodash.pick(announcement, ['_id', 'title', 'coverImg', 'details.from', 'stats', 'createdAt', 'commentsData.totalCmts']);
            announcementList.push(listData);
        });
        return res.status(200).send(announcementList);
    } else {
        return res.status(404).send('announcement not found');
    };
});


router.get('/:id', [valObjId], async (req, res) => {
    const announcementDetails = await announcementModel.findById(req.params.id);
    if(announcementDetails) {
        return res.status(200).send(announcementDetails);
    } else {
        return res.status(404).send('Specified announcement not found');
    };
});


module.exports = router;