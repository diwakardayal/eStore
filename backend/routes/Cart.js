const router = require("express").Router();
const bcrypt = require("bcrypt");

const Jwt = require("jsonwebtoken");
const UserCart = require("../model/UserCart");

router.post("/", async (req, res) => {
  const { id, productName, productId, Amount, Quantity } = req.body;

  const wish = new UserCart({
    _id: id,
    productName: productName,
    productId: productId,
    Amount: Amount,
    Quantity: Quantity,
  });

  await wish.save();

  if (wish) {
    res.send("item saved in wish list");
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
