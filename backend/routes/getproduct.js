const router = require("express").Router();
const inventory = require("../model/inventory");

router.get("/:id", async (req, res) => {
  const { id } = req?.params;

  const gg = inventory.find();

  if (gg) {
    res.send(gg);
  } else {
    throw ERR;
  }
});

module.exports = router;
