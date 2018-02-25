var mongoose = require("mongoose");

//connect to mongo db
var mongoDB = "mongodb://192.168.86.201:32774/people";
mongoose.connect(mongoDB);
//get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//get the default connection
var db = mongoose.connection;
//bind connection to error event
db.on("error", console.error.bind(console, "MongoDB connection error:"));
