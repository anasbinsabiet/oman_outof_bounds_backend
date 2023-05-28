const express = require("express");
const router = express.Router();
const { registration, login } = require("../controllers/userController");
const { getAll, create, getUserList } = require("../controllers/contactController");

router.post("/register", registration);
router.post("/login", login);
router.post("/create", create);
router.get("/get_content", getAll);
router.get("/users", getUserList);
module.exports = router;
