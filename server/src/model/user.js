const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    ProductName: String,
    ProductCategory: String,
    ProductPrice: String,
    ProductImage: String
  });
   
  const User = mongoose.model('User', ProductSchema);

  exports.default = User;