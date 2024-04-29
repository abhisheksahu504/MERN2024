require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-route");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");

const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());
//handling cors
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

//mount the router
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//lets define admin route
app.use("/api/admin", adminRoute);

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
