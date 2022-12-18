const { Schema, Types } = require("mongoose");

const User = new Schema({
  username: {
    type: String,
    Unique,
    Required: true,
    Trimmed,
  },

  email: {
    type: String,
    Required: true,
    Unique,
  },

  thoughts: {},

  friends: {},
});

module.exports = User;
