// Dependencies
const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema({
    title: String,
    coverImg: String,
    details: {
        desc: String,
        to: String,
        autuorId: String,
        media: {
            type: [{
                heading: String, 
                link: String
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
    }
});

const Feed = mongoose.model('feeds', FeedSchema);

module.exports = Feed;