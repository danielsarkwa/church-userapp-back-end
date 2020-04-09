const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    msgType: String,
    msgTypeId: String,
    messageSubject: String,
    messageContent: String,
    messageAutour: String,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Message = mongoose.model('messages', MessageSchema);

module.exports = Message;