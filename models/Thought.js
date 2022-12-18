const { Schema, model } = require("mongoose");

// Schema to create a course model
const Thought = new Schema({
  thoughtText: {
    type: String,
    Required: true,
  },

  createdAt: {},

  username: {
    type: String,
    Required: true,
  },

  reactions: {},
});

const Thoughts = model("course", Thought);

module.exports = Thoughts;
