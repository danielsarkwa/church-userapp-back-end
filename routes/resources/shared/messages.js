const express = require('express');
const router = express.Router();
const messageModel = require('../../../lib/models/shared/messages.schema');

// add a push notification to the dashboard here
router.post('/', async (req, res) => {
    message = await new messageModel({
        msgType: req.body.msgType,
        msgTypeId: req.body.msgTypeId,
        messageSubject: req.body.messageSubject,
        messageContent: req.body.messageContent,
        messageAutour: req.body.messageAutour
    });

    try{
        await message.save();
        res.status(200).json('message sent');
    } catch(ex) {
        res.status(400).json('could not send message');
    }
});


// get my messages


module.exports = router;