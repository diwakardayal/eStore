const mongoose = require("mongoose");

const UserPurchaseHistory = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  NoOfProduct: {
    type: Number,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("UserPurchaseHistorys", UserPurchaseHistory);
