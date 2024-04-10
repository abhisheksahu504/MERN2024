const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

// mongoose.connect(URI);

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Successfull to DB");
  } catch (error) {
    console.log("connection not succesfull--failed");
    process.exit(0);
  }
};
module.exports = connectDB;
