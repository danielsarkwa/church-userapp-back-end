// Dependencies
const mongoose = require("mongoose");

const HelpSupportsSchema = new mongoose.Schema({
    title: String,
    desc: String,
    content: String,
    media: {
        type: [{
            heading: String, 
            link: String
        }]
    },
    type: String,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    response: {
        type: {
            helpful: Number,
            notHelpful: Number
        }
    }
});

const helpSupports = mongoose.model('helpSupports', HelpSupportsSchema);

module.exports = helpSupports;

// sugggested feature
/**
 * title
 * desc
 * createdAt
 * type
 */

// feedback
/**
 * desc
 * createdAt
 * type
 */