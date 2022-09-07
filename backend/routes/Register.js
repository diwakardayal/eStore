const router = require("express").Router();
const bcrypt = require("bcrypt");

const Jwt = require("jsonwebtoken");

const User = require("../model/User");

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  let register = await User.findOne({ email: email });

  if (register) {
    return res.status(400).send("User already exist");
  }
  register = new User({
    username: username,
    email: email,
    password: password,
  });
  await register.save();

  res.status(200).send(User);
});

module.exports = router;
