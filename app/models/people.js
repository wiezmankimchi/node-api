var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// var PeopleSchema = new Schema({
//   name: String,
//   address: String,
//   city: String,
//   state: String,
//   zip: Number
// });

var PeopleSchema = new Schema(
  {
    index: Number,
    guid: String,
    isActive: Boolean,
    balance: String,
    picture: String,
    age: Number,
    eyeColor: String,
    name: String,
    gender: String,
    company: String,
    email: String,
    phone: String,
    address: String,
    about: String,
    registered: Date,
    latitude: Number,
    longtitude: Number,
    tags: Array,
    freinds: Array,
    greeting: String,
    favoriteFruite: String
  },
  { collection: "people" }
);

module.exports = mongoose.model("Person", PeopleSchema);
