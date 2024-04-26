const Service = require("../models/service-model");
const services = async (req, res) => {
  try {
    const responses = await Service.find();
    if (!responses) {
      res.status(404).json({ msg: "No service found" });
      return;
    }
    return res.status(200).json({ msg: "services found", data: responses });
  } catch (error) {
    console.log(`services: ${error}`);
  }
};
module.exports = services;
