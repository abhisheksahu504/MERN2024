const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const { loginSchema, signupSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authcontrollers.home);
router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(validate(loginSchema), authcontrollers.login);

//getting datas from data base for autofill
router.route("/user").get(authMiddleware, authcontrollers.user);
module.exports = router;
