const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phoneNo: {
    type: Number,
  },
  wishlist: {},
  RegDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Users", UserSchema);
