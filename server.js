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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; //set the serer port

//connect to mongo db
var mongoDB = "mongodb://192.168.86.201:32774/people";
mongoose.connect(mongoDB);
//get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//get the default connection
var db = mongoose.connection;
//bind connection to error event
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//pull the schema in the db
var Person = require("./app/models/people");

//ROUTES FOR the API
// ===============================================
//get an instance fo the express Router
var router = express.Router();

router.use(function(req, res, next) {
  console.log("Somthing is happening");
  next(); //go to the next routes
});

//test route to make use all in good and working
//accessed at GET "http://localhost:8080/api"
router.get("/", function(req, res) {
  res.json({ message: "good.. Welcome to our API!" });
});

//additional routes for the api
// /api/people      GET     Get all the people
// /api/person      POST    Crete a new person
// /api/people/:id  GET     Get a single person
// /api/people/:id  PUT     Update a person with new info
// /api/people/:id  DELETE  Delete a person

router.route("/people").get(function(req, res) {
  Person.find(function(err, people) {
    if (err) res.send(err);
    res.json(people);
  });
});

router
  .route("/people/:id")
  .get(function(req, res) {
    console.log("_id:", req.params.id);
    Person.findById(req.params.id, function(err, person) {
      if (err) req.send(err);
      res.json(person);
    });
  })
  .put(function(req, res) {
    Person.findById(req.params.id, function(err, person) {
      if (err) res.send(err);
      for (var field in person) {
        if (field !== "_id" && field !== "__v") {
          if (req.body[field] !== undefined) {
            person[field] = req.body[field];
          }
        }
      }
      person.save(function(err) {
        if (err) res.send(err);
        res.json({ message: "Person updated!" });
      });
    });
  })
  .delete(function(req, res) {
    Person.remove(
      {
        _id: req.params.id
      },
      function(err, person) {
        if (err) res.send(err);
        res.json({ message: "Successfully deleted!" });
      }
    );
  });
router.route("/person").post(function(req, res) {
  var person = new Person();

  with (person) {
    name = req.body.name;
    address = req.body.address;
    city = req.body.city;
    state = req.body.state;
    zip = req.body.zip;
  }

  person.save(function(err) {
    if (err) res.send(err);
    res.json({ message: "Person created!" });
  });
});

//register the routes
//all of the routes will be prefixed with /api
app.use("/api", router);

//START THE SERVER
// ===============================================
app.listen(port);
console.log("Magic happens on port " + port);
