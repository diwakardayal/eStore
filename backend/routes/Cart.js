const router = require("express").Router();
const bcrypt = require("bcrypt");

const Jwt = require("jsonwebtoken");
const UserCart = require("../model/UserCart");

router.post("/", async (req, res) => {
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

  const wish = new UserCart({
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

  // await wish.findOne({ uniqueId: uniqueId });

  if (wish) {
    res.status(200).send("item saved in wish list");
  } else {
    res.status(500).send("Internal server error");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req?.params;

  const info = await UserCart.findById({ _id: id });

  if (info) {
    res.status(200).send(info);
  } else {
    res.status(400).send("Couldnt Find Cart items");
  }
});

module.exports = router;
