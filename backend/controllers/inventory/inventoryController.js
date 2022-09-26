// const inventory = require("../../model/inventory");
const inventory = require("../../model/inventory");

module.exports.push = async (req, res) => {
  try {
    const {
      uniqueId,
      productName,
      img,
      productId,
      size,
      quantity,
      amount,
      color,
      productDesc,
    } = req.body;
    console.log(req.body);
    const total = quantity.total;
    const red = quantity.color.red;
    const black = quantity.color.black;
    const blue = quantity.color.blue;

    const newitem = new inventory({
      uniqueId: uniqueId,
      productName: productName,
      img: img,
      productId: productId,
      color: color,
      size: size,
      quantity: {
        total: total,
        color: {
          red: red,
          black: black,
          blue: blue,
        },
      },
      productDesc: productDesc,
      amount: amount,
    });

    await newitem.save();

    if (newitem) {
      res.status(200).send("Inventory pushed");
    }
  } catch (e) {
    res.status(500).send("Internal service Error");
  }
};

module.exports.read = async (req, res) => {
  const { uniqueId } = req.body;

  if (uniqueId) {
    let results = await inventory.findOne({ uniqueId: uniqueId });
    if (results) {
      res.status(200).send(results);
    } else {
      res.status(202).send("No Data found");
    }
  } else {
    let results = await inventory.find({});

    if (results) {
      res.status(200).send(results);
    } else {
      res.status(500).send("Internal Service Error");
    }
  }
};

module.exports.edit = async (req, res) => {
  const { uniqueId, quantity } = req.body;
  try {
    console.log(id);

    res.status(200).send(id);
  } catch (e) {
    console.log(e);
  }
};
