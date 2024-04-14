require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-route");
const contactRoute = require("./router/contact-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());

//mount the router
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

//All this code is transferred to auth rout and auth controller files
// app.get("/", (req, res) => {
//   res.status(200).send("Welcome");
// });
// app.get("/register", (req, res) => {
//   res.status(200).send("Registration Page");
// });
app.use(errorMiddleware);
const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
});
