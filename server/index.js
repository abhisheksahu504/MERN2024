require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-route");
const connectDB = require("./utils/db");

app.use(express.json());

//mount the router
app.use("/api/auth", router);

//All this code is transferred to auth rout and auth controller files
// app.get("/", (req, res) => {
//   res.status(200).send("Welcome");
// });
// app.get("/register", (req, res) => {
//   res.status(200).send("Registration Page");
// });

const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
});
