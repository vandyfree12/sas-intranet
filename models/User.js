const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String, required: true },
  mobile: { type: String },
  password: { type: String, required: true },
  avatar: { type: String },
  role: { type: String, default: 2 },
  date: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model('users', UserSchema);
