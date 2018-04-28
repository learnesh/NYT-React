// Require mongoose
var mongoose = require("mongoose");

// Use mongoose in ES6 Promises
mongoose.Promise = Promise;

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/nytsearch");
var db = mongoose.connection;

// Display errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

module.exports = db;
