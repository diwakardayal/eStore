const mongoose = require("mongoose");

const UserCart = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  uniqueId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productDesc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },

  productId: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    total: {
      type: Number,
      required: true,
    },
    color: {
      black: {
        type: Number,
      },
      blue: {
        type: Number,
      },
      red: {
        type: Number,
      },
    },
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("UserCarts", UserCart);
