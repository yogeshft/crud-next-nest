const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  userType: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
