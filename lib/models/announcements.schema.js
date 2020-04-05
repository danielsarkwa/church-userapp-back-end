// Dependencies
const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
    title: String,
    tags: [String],
    desc: String,
    coverImg: String,
    details: {
        autuorId: String,
        from: String,
        to: String,
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
            likes: Number
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
            totalMsg: Number,
            messages: [String]
        }
    }
});

const Announcement = mongoose.model('Announcements', AnnouncementSchema);

module.exports = Announcement;