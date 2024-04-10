const User = require("../models/user-model");

//Home Logic
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Home");
  } catch (error) {
    console.log(error);
  }
};

//register logic
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = User.findOne({ email: email });
    //msg if user is already registered
    if (userExist) {
      return res.status(400).json({ msg: "email already exist" });
    }
    await User.create({ username, email, phone, password });
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json("internal server error");
  }
};
module.exports = { home, register };
