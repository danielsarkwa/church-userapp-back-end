// dependencies
const express = require('express');
const router = express.Router();
const _lodash = require('lodash');
const valObjId = require('../../lib/middlewares/validateObjectId');
const sermonModel = require('../../lib/models/sermons.schema');
const folderModel = require('../../lib/models/shared/folders.schema');


router.get('/', async (req, res) => {
    const allSeries = await folderModel.find({'belongsTo': 'sermon'});
    if (allSeries.length > 0) {
        const seriesList = [];
        allSeries.forEach(series => {
            const listData = _lodash.pick(series, ['_id', 'title', 'coverImg', 'numberOfFiles', 'createdAt', 'stats']);
            seriesList.push(listData);
        });
        return res.status(200).json(seriesList);
    } else {
        return res.status(404).json('Series not found');
    };
});


router.get('/series/one/:id', [valObjId], async (req, res) => {
    const seriesDetails = await folderModel.findById(req.params.id);
    if(seriesDetails) {
        return res.status(200).json(seriesDetails);
    } else {
        return res.status(404).json('Specified series not found');
    };
});


router.get('/:id', [valObjId], async (req, res) => {
    const state = req.query.state;
    const sermonDetails = await sermonModel.findById(req.params.id);
    if(sermonDetails) {
        if (state == 'details') {
            // this is used when the a single sermon is opened
            return res.status(200).json(sermonDetails);
        } else {
            // this is used by the front-end to load sermons of a series on by one
            const listData = _lodash.pick(sermonDetails, ['_id', 'title', 'seriesId', 'coverImg', 'details.desc', 'details.speaker']);
            return res.status(200).json(listData);
        }
    } else {
        return res.status(404).json('Specified sermon not found');
    };
});


router.get('/sermons/all', async (req, res) => {
    const sermons = await sermonModel.find({});
    if (sermons.length > 0) {
        const sermonsList = [];
        sermons.forEach(sermons => {
            const listData = _lodash.pick(sermons, ['_id', 'title', 'seriesId', 'coverImg', 'details.desc', 'details.speaker']);
            sermonsList.push(listData);
        });
        return res.status(200).json(sermonsList);
    } else {
        return res.status(404).json('Sermons not found');
    }
});


module.exports = router;