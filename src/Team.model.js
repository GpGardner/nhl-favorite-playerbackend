const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Player = new Schema({
  name: {
    type: String,
  },
  id: {
    type: Number,
  },
});

module.exports = mongoose.model("Player", Player);
