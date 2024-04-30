const express = require("express");
const adminContoller = require("../controllers/admin-controller");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminContoller.getAllUsers);
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminContoller.getAllContacts);
module.exports = router;
