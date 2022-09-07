const mongoose = require("mongoose");

const UserCart = new mongoose.Schema({
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

module.exports = mongoose.model("UserCarts", UserCart);
