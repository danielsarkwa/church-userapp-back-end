const express = require('express');
const router = express.Router();
const valObjId = require('../../../lib/middlewares/validateObjectId');
const commentModel = require('../../../lib/models/shared/comments.schema');

// add a push notification to the dashboard and mobile app here
// post new comment
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


// add a push notification to the dashboard here
// reply a comment
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