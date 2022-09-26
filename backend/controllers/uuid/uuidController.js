const { v4: uuidv4 } = require("uuid");

module.exports.getuuid = async (req, res) => {
  const gg = uuidv4();
  console.log(gg);
  res.send(gg);
};
