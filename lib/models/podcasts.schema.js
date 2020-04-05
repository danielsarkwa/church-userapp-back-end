// Dependencies
const mongoose = require("mongoose");

const PodcastSchema = new mongoose.Schema({
    title: String,
    channelId: String,
    audioUrl: String,
    coverImg: String,
    duration: Number,
    details: {
        speakers: {
            type: {
                hosts: [String],
                guests: [String]
            }
        },
        desc: String,
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
            shared: Number,
            downloads: Number
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

const Podcast = mongoose.model('podcasts', PodcastSchema);

module.exports = Podcast;