const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    fullName: String,
    phoneNumber: Number,
    email: String,
    userName: String,
    password: {type: String, required: true}
  });
   
  module.exports = mongoose.model("User", UserSchema);

  // exports.default = User;

  
  






