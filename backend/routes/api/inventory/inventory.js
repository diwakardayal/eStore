const inventory = require("express").Router();
const inventoryController = require("../../../controllers/inventory/inventoryController");

inventory.post("/read", inventoryController.read);
inventory.post("/push", inventoryController.push);
// inventory.post("/edit");

module.exports = inventory;
