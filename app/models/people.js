var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PeopleSchema = new Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zip: Number
});

module.exports = mongoose.model("Person", PeopleSchema);
