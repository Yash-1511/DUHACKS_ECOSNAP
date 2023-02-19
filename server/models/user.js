const mongoose = require("mongoose");

const { ROLES } = require("../constants");

const { Schema } = mongoose;

// User Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
  points:{
    type: Number,
    default:0,
  },
  role: {
    type: String,
    default: ROLES.Member,
    enum: [ROLES.Admin, ROLES.Member, ROLES.Moderator],
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
