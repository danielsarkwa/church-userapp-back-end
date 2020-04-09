const mongoose =  require('mongoose');

const CommentSchema = new mongoose.Schema({
    cmtType: String,
    cmtTypeId: String,
    commentContent: String,
    commentAutour: String,
    stats: {
        type: {
            likes: Number,
            dislikes: Number,
        },
        required: true,
        default: {
            likes: 0,
            dislikes: 0
        }
    },
    commentReply: {
        type: {
            totalReplies: Number,
            replies: {
                type: [{
                    commentAutour: String,
                    commentContent: String,
                    createAt: String
                }]
            }
        },
        required: true,
        default: {
            totalReplies: 0,
            replies: []
        }
    },
    createdAt: Date
});

const Comment = mongoose.model('comments', CommentSchema);

module.exports = Comment;