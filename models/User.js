const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  UserName: {
    type: String,
    required: true,
  },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("User", User);