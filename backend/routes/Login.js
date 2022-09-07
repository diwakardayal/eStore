const router = require("express").Router();
const bcrypt = require("bcrypt");

const Jwt = require("jsonwebtoken");
const User = require("../model/User");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  let login = await User.findOne({
    email: email,
    password: password,
  });

  if (login) {
    const token = Jwt.sign({ email }, process.env.SECRETKEY, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token: token, email: email });
  } else {
    return res.status(400).send("Wrong Username/Password");
  }
});

module.exports = router;
