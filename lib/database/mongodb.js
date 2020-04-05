const mongoose = require("mongoose");
// const config = require("config");

module.exports = function() {
    // const db = config.get("db");
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/love-reign-mobile-app', { useNewUrlParser: true })
            .then(() => console.log('love reign mobile connected to db successfully'));
};