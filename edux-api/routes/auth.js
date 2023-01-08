const router = require("express").Router();
const { RegisterUser, LoginUser } = require("../controleres/auth.controler");

//Register Api
router.post("/register", RegisterUser);

//Login Api
router.post("/login", LoginUser);

module.exports = router;
