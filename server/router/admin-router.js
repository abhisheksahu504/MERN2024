const express = require("express");
const adminContoller = require("../controllers/admin-controller");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/users").get(authMiddleware, adminContoller.getAllUsers);
router.route("/contacts").get(authMiddleware, adminContoller.getAllContacts);
module.exports = router;
