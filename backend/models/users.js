const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  correct: {type: Number, default: 0},
  incorrect: {type: Number, default: 0}
});

module.exports = mongoose.model('users', userSchema);
