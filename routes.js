var express = require("express");
//ROUTES FOR the API
// ===============================================
//get an instance fo the express Router
var router = express.Router();

//pull the schema in the db
var Person = require("./app/models/people");

router.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log("Something is happening");
  next(); //go to the next routes
});

//test route to make use all in good and working
//accessed at GET "http://localhost:8080/api"
router.get("/", function(req, res) {
  res.json({
    message: "good.. Welcome to our API!"
  });
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
    console.log("list all");
    res.json(people);
  });
});

router
  .route("/people/:id")
  .get(function(req, res) {
    Person.findById(req.params.id, function(err, person) {
      if (err) req.send(err);
      console.log("list one specific - _id:", req.params.id);
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
        console.log("update one specific - _id:", req.params.id);
        res.json({
          message: "Person updated!"
        });
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
        console.log("delete one specific - _id:", req.params.id);
        res.json({
          message: "Successfully deleted!"
        });
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
    console.log("update one specific");
    res.json({
      message: "Person created!"
    });
  });
});

module.exports = router;
