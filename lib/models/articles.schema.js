// Dependencies
const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    title: String,
    accountId: String,
    coverImg: String,
    content: String,
    details: {
        autuorId: String,
        desc: String,
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
    },
    messagesData: {
        type: {
            totalMsgs: Number,
            messages: [String]
        }
    }
});

const Article = mongoose.model('articles', ArticleSchema);

module.exports = Article;