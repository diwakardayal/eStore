const router = require("express").Router();
const bcrypt = require("bcrypt");

const Jwt = require("jsonwebtoken");
const Wishlist = require("../model/UserwishList");

router.post("/:id", async (req, res) => {
  const { id } = req?.params;
  const { productId, productName, Quantity, Amount } = req.body;

  const wish = new Wishlist({
    _id: id,
    productId: productId,
    productName: productName,
    Quantity: Quantity,
    Amount: Amount,
  });

  await wish.save();

  if (wish) {
    res.send("Data entered in wishlist");
  } else {
    res.status(400).send("Internal Service error");
  }
});

module.exports = router;
