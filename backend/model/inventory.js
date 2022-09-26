const mongoose = require("mongoose");

const inventory = new mongoose.Schema({
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
      min: 0,
    },
    color: {
      black: {
        type: Number,
        min: 0,
      },
      blue: {
        type: Number,
        min: 0,
      },
      red: {
        type: Number,
        min: 0,
      },
    },
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Inventories", inventory);
