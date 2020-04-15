// dependencies
const express = require('express');
const router = express.Router();
const _lodash = require('lodash');
const valObjId = require('../../lib/middlewares/validateObjectId');
const artlceModel = require('../../lib/models/articles.schema');
const folderModel = require('../../lib/models/shared/folders.schema');


router.get('/', async (req, res) => {
    const perPage = 10;
    const page = req.query.pageNumber ? req.query.pageNumber : 1;
    const accounts = await folderModel
        .find({'belongsTo': 'article'}).skip((perPage * page) - perPage).limit(perPage);
    if (accounts.length > 0) {
        const accountList = [];
        accounts.forEach(series => {
            const listData = _lodash.pick(series, ['_id', 'title', 'coverImg', 'numberOfFiles', 'createdAt', 'stats']);
            accountList.push(listData);
        });
        return res.status(200).json(accountList);
    } else {
        return res.status(404).json('Accounts not found');
    };
});


router.get('/accounts/one/:id', [valObjId], async (req, res) => {
    const accountDetails = await folderModel.findById(req.params.id);
    if(accountDetails) {
        return res.status(200).json(accountDetails);
    } else {
        return res.status(404).json('Specified account not found');
    };
});


router.get('/articles/all', async (req, res) => {
    const perPage = 10;
    const page = req.query.pageNumber ? req.query.pageNumber : 1;
    const articles = await artlceModel
        .find({}).skip((perPage * page) - perPage).limit(perPage);
    if (articles.length > 0) {
        const articlesList = [];
        articles.forEach(articles => {
            const listData = _lodash.pick(articles, ['_id', 'title', 'accountId', 'coverImg', 'details.desc', 'details.autuorId', 'createdAt', 'stats']);
            articlesList.push(listData);
        });
        return res.status(200).json(articlesList);
    } else {
        return res.status(404).json('Articles not found');
    }
});


router.get('/:id', [valObjId], async (req, res) => {
    const state = req.query.state;
    const articleDetails = await artlceModel.findById(req.params.id);
    if(articleDetails) {
        if (state == 'details') {
            // this is used when the a single sermon is opened
            return res.status(200).json(articleDetails);
        } else {
            // this is used by the front-end to load sermons of a series on by one
            const listData = _lodash.pick(articleDetails, ['_id', 'title', 'accountId', 'coverImg', 'details.desc', 'details.autuorId', 'createdAt', 'stats']);
            return res.status(200).json(listData);
        }
    } else {
        return res.status(404).json('Specified sermon not found');
    };
});


module.exports = router;