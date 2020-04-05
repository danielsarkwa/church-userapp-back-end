// Dependencies
const mongoose = require("mongoose");

// this is used by other parts
const FolderSchema = new mongoose.Schema({
    title: String,
    coverImg: String,
    desc: String,
    belongsTo: String,
    totalTime: Number,
    numberOfFiles: Number,
    files: [String],
    stats: {
        type: {
            views: Number,
            likes: Number
        }
    },
    createdAt: Date,
});

const Folder = mongoose.model('folders', FolderSchema);
module.exports = Folder;