const router = require("express").Router();
const bcrypt = require("bcrypt");

const Jwt = require("jsonwebtoken");
const Wishlist = require("../model/UserwishList");

router.post("/", async (req, res) => {
  try {
    const {
      uniqueId,
      productName,
      productId,
      amount,
      quantity,
      img,
      color,
      size,
    } = req.body;

    console.log(
      uniqueId,
      productName,
      productId,
      amount,
      quantity,
      img,
      color,
      size
    );

    const wish = new Wishlist({
      uniqueId: uniqueId,
      productName: productName,
      img: img,
      productId: productId,
      color: color,
      size: size,
      amount: amount,
      quantity: quantity,
    });

    await wish.save();

    if (wish) {
      res.status(200).send("Data entered in wishlist");
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
