const express = require('express');
const router = express.Router();
const valObjId = require('../../../lib/middlewares/validateObjectId');
const commentModel = require('../../../lib/models/shared/comments.schema');


router.get('/all', async (req, res) => {
    const perPage = 10;
    const page = req.query.pageNumber ? req.query.pageNumber : 1;
    const comments = await commentModel
        .find({'cmtType': req.query.entity, 'cmtTypeId': req.query.entityId})
        .skip((perPage * page) - perPage).limit(perPage);
    if (comments.length > 0) {
        return res.status(200).json(comments);
    } else {
        return res.status(400).json('Comments not found');
    };
});


router.post('/post', async (req, res) => {
    comment = await new commentModel({
        cmtType: req.body.cmtType,
        cmtTypeId: req.body.cmtTypeId,
        commentContent: req.body.commentContent,
        commentAutour: req.body.commentAutour
    });

    try{
        await comment.save();
        res.status(200).json('comment sent');
    } catch(ex) {
        console.log(ex);
        res.status(400).json('could not send comment');
    }
});


router.put('/reply/:id', [valObjId], async (req, res) => {
    let comment = await commentModel.findById(req.params.id);
    if(!comment) return res.status(404).json("comment not found.");

    comment.commentReply.replies.push(req.body.data);
    ++comment.commentReply.totalReplies;

    try{
        await comment.save();
        return res.status(200).json('reply sent');
    } catch(ex) {
        return res.status(400).json('could not send reply');
    }
});


module.exports = router;