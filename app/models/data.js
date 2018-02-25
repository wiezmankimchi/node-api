var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DataSchema = new Schema({
  index: Number,
  guid: String,
  isActive: Boolean,
  balance: String,
  picture: String,
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  compnay: String,
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
});

module.exports = mongoose.model("Person", DataSchema);
