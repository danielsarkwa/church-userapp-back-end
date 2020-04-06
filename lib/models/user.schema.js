// Dependencies
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        default: ''
    },
    avatarUrl: { // the image will be uploaded to s3 by the mobile app and then send the url to the database
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: ''
    },
    address: {
        type: {
            country: String, 
            state: String,
            city: String,
            town: String,
        },
        default: {
            country: '',
            state: '',
            city: '',
            town: ''
        }
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'user'
    },
    role: {
        type: {
            groups: [String], // this group is the group the user is following, which the user won't use now
            roleType: String
        },
        required: false
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;