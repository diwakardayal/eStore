const mongoose = require("mongoose");

const UserwishList = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
  },
  productName: {
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
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Userwishlists", UserwishList);
