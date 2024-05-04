const express = require("express");
const adminContoller = require("../controllers/admin-controller");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminContoller.getAllUsers);
router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminContoller.getUserById);
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminContoller.updateUserById);
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminContoller.deleteUserByID);
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminContoller.getAllContacts);
module.exports = router;
