// Dependencies
const mongoose = require("mongoose");

const SermonSchema = new mongoose.Schema({
    title: String,
    seriesId: String,
    audioUrl: String,
    coverImg: String,
    duration:Number,
    details: {
        bibleTxts: {
            type: [{
                text: String, 
                scripture: String
            }]
        },
        speaker: String,
        desc: String,
        points: {
            type: [{
                heading:String, 
                body: String
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
            shared: Number,
            downloads: Number
        }
    },
    commentsData: {
        type: {
            totalCmts:Number,
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

const Sermon = mongoose.model('sermons', SermonSchema);

module.exports = Sermon;