//server.js
//BASE SETUP
// ===============================================

//required packages
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//configure app to use body-parser()
// this will let us get the data from a POST
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

var port = process.env.PORT || 8080; //set the serer port

//get the db configuration
var db = require("./db");

//import the routes
var router = require("./routes");

//register the routes
//all of the routes will be prefixed with /api
app.use("/api", router);

//START THE SERVER
// ===============================================
app.listen(port);
console.log("Magic happens on port " + port);
