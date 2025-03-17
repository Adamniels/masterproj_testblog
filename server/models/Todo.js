const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: false,
  },
  priority: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // TODO:
  //  - deadline
  //  - klar eller inte
});

module.exports = mongoose.model("Todo", TodoSchema);
