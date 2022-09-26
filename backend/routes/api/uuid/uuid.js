const uuid = require("express").Router();
const uuidController = require("../../../controllers/uuid/uuidController");

uuid.get("/getuuid", uuidController.getuuid);

module.exports = uuid;
