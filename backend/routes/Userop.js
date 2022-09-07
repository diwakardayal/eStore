const router = require("express").Router();
const bcrypt = require("bcrypt");
var ObjectID = require("mongodb");

const Jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const { mongo } = require("mongoose");
const User = require("../model/User");

router.get("/:id", async (req, res) => {
  const { id } = req?.params;

  const hello = await User.findById({ _id: id });

  if (hello) {
    res.send(hello);
  } else {
    res.send("USER NOT FOUND");
  }

  // await User.findOne({ _id: id })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((e) => console.log(e));
});

module.exports = router;
