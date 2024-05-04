const User = require("../models/user-model");
const Contact = require("../models/contact-model");
//getAllUsers logic
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Users not found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
//getUserByid single user logiv
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
//update users by id

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updatedUserData }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};
// delete user by id logic
const deleteUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
// getting all contacts logic
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "Contacts not found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserByID,
  getUserById,
  updateUserById,
};
