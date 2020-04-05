// Dependencies
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    title: String,
    coverImg: String,
    viewColor: String,
    date: String,
    time: String,
    desc: String,
    tags: [String],
    details: {
        autuorId: String,
        content: String,
        media: {
            type: [{
                heading: String,
                link: String
            }]
        },
        reminders: {
            type: [{
                date: String, 
                time: String,
            }]
        },
        attachments: {
            type: [{
                heading: String, 
                body: String 
            }]
        }
    },
    createdAt: Date,
    stats: {
        type: {
            views: Number,
            likes: Number,
            shared: Number
        }
    },
    commentsData: {
        type: {
            totalCmts: Number,
            comments: [String]
        }
    },
    messagesData: {
        type: {
            totalMsgs: Number,
            messages: [String]
        }
    }
});

const Event = mongoose.model('events', EventSchema);

module.exports = Event;