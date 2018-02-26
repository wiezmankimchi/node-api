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
  company: String,
  email: String,
  phone: String,
  address: String,
  about: String,
  registered: Date,
  latitude: Number,
  longitude: Number,
  tags: Array,
  friends: Array,
  greeting: String,
  favoriteFruit: String
});

module.exports = mongoose.model("Person", DataSchema);
