const mongoose = require("mongoose");

const UserwishList = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Userwishlists", UserwishList);