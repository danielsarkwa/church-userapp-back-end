// dependencies
const express = require('express');
const router = express.Router();
const _lodash = require('lodash');
const valObjId = require('../../lib/middlewares/validateObjectId');

const artlceModel = require('../../lib/models/articles.schema');
const folderModel = require('../../lib/models/shared/folders.schema');


router.get('/', async (req, res) => {
    const accounts = await folderModel.find({'belongsTo': 'article'});
    if (accounts.length > 0) {
        const accountList = [];
        accounts.forEach(series => {
            const listData = _lodash.pick(series, ['_id', 'title', 'coverImg', 'numberOfFiles', 'createdAt', 'stats']);
            accountList.push(listData);
        });
        return res.status(200).send(accountList);
    } else {
        return res.status(404).send('Accounts not found');
    };
});


router.get('/accounts/one/:id', [valObjId], async (req, res) => {
    const accountDetails = await folderModel.findById(req.params.id);
    if(accountDetails) {
        return res.status(200).send(accountDetails);
    } else {
        return res.status(404).send('Specified account not found');
    };
});


router.get('/articles/all', async (req, res) => {
    const articles = await artlceModel.find({});
    if (articles.length > 0) {
        const articlesList = [];
        articles.forEach(articles => {
            const listData = _lodash.pick(articles, ['_id', 'title', 'accountId', 'coverImg', 'details.desc', 'details.autuorId', 'createdAt', 'stats']);
            articlesList.push(listData);
        });
        return res.status(200).send(articlesList);
    } else {
        return res.status(404).send('Articles not found');
    }
});


router.get('/:id', [valObjId], async (req, res) => {
    const state = req.query.state;
    const articleDetails = await artlceModel.findById(req.params.id);
    if(articleDetails) {
        if (state == 'details') {
            // this is used when the a single sermon is opened
            return res.status(200).send(articleDetails);
        } else {
            // this is used by the front-end to load sermons of a series on by one
            const listData = _lodash.pick(articleDetails, ['_id', 'title', 'accountId', 'coverImg', 'details.desc', 'details.autuorId', 'createdAt', 'stats']);
            return res.status(200).send(listData);
        }
    } else {
        return res.status(404).send('Specified sermon not found');
    };
});


module.exports = router;