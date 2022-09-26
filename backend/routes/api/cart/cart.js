const cart = require("express").Router();

const cartController = require("../../../controllers/cart/cartController");

cart.post("/push", cartController.push);
cart.post("/read", cartController.read);
cart.post("/editCart", cartController.editCart);
module.exports = cart;
