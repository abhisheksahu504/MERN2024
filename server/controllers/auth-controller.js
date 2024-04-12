const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

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

    const userExist = await User.findOne({ email: email });
    //const userExist = await User.findOne({ email }); same same but different
    //msg if user is already registered
    if (userExist) {
      return res.status(400).json({ msg: "email already exist" });
    }
    //hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      // password: hash_password,
      password,
    });
    res.status(201).json({
      msg: "Registration succesfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(400).json("internal server error");
  }
};

//User Login Logic

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
module.exports = { home, register, login };
