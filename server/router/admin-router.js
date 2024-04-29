const express = require("express");
const adminContoller = require("../controllers/admin-controller");
const router = express.Router();

router.route("/users").get(adminContoller.getAllUsers);
router.route("/contacts").get(adminContoller.getAllContacts);
module.exports = router;
