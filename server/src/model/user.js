const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: String,
    phoneNumber: String,
    email: String,
    userName: String,
    pasaaword: {type: String}
  });
   
  const User = mongoose.model('User', UserSchema);

  exports.default = User;
