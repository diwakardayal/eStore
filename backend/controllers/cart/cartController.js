const cart = require("../../model/UserCart");
const inventory = require("../../model/inventory");
const { where } = require("../../model/UserCart");

module.exports.push = async (req, res) => {
  const { uniqueId, userId, color } = req.body;

  //   const { color, size, quantity } = req.body;
  try {
    // const updateCart = cart.updateOne({ productName: productName }, {});

    //destructuring object
    let quantity;

    for (const item in color) {
      quantity = color[item];
    }

    let colorVariable;
    for (const item in color) {
      colorVariable = item;
    }

    // let existingCart = await cart.find({ userId: userId, uniqueId: uniqueId });
    // res.send(existingCart);

    let FindInventory = await inventory.findOne({ uniqueId: uniqueId });

    let somethingNew = new cart({
      userId: userId,
      uniqueId: FindInventory.uniqueId,
      productName: FindInventory.productName,
      img: FindInventory.img,
      productId: FindInventory.productId,

      size: "medium",
      quantity: {
        total: quantity,
        color: {
          colorVariable: quantity,
        },
      },
      productDesc: FindInventory.productDesc,
      amount: FindInventory.amount * quantity,
    });

    await somethingNew.save();

    if (somethingNew) {
      let getinventValue = await inventory.find({ uniqueId: uniqueId });

      console.log(getinventValue[0].quantity.total);
      if (getinventValue[0].quantity.total > 0) {
        let ChangeInvent = await inventory.updateMany(
          {
            uniqueId: uniqueId,
          },
          {
            $inc: {
              "quantity.total": -quantity,
            },
          }
        );

        if (ChangeInvent) {
          res.send(
            "Item Added to cart and inventory has been updated acordingly"
          );
        }
      } else {
        res.send("OUT OF STOCK");
      }
    } else {
      res.send("Couldnt save to cart & hence no inventory updated");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports.read = async (req, res) => {
  const { userId } = req.body;
  const hi = await cart.find({ userId: userId });

  if (hi) {
    res.send(hi);
  } else {
    throw err;
  }
};

module.exports.editCart = async (req, res) => {
  const { userId, uniqueId, quantity, color } = req.body;

  let findvalue = await cart.find({ userId: userId, uniqueId: uniqueId });

  const newAmount = Number(findvalue[0].amount) * Number(quantity);

  /*  let amount = await cart.find({ userId: userId, uniqueId: uniqueId }); */

  //changing quantity
  let existingCart = await cart.updateMany(
    {
      userId: userId,
      uniqueId: uniqueId,
    },
    {
      $set: {
        amount: newAmount,
      },
      $set: {
        $color: {
          ...color,
        },
      },

      $set: {
        "quantity.total": quantity,
      },
    }
  );

  if (existingCart) {
    if (findvalue[0].quantity < quantity) {
      let ChangeInvent = await inventory.updateMany(
        {
          uniqueId: uniqueId,
        },
        {
          $inc: {
            "quantity.total": +quantity,
          },
        }
      );
      if (ChangeInvent) {
        res.send("Cart & Inventory Updated");
      } else {
        res.send("ERR");
      }
    } else {
      let ChangeInvent = await inventory.updateMany(
        {
          uniqueId: uniqueId,
        },
        {
          $inc: {
            "quantity.total": -quantity,
          },
        }
      );

      if (ChangeInvent) {
        res.send("Cart & Inventory Updated");
      } else {
        res.send("ERR");
      }
    }
  }
};
