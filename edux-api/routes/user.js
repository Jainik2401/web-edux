const router = require("express").Router();
const {
  UserUpdate,
  UserDelete,
  UserGet,
  UserGetAll,
} = require("../controleres/user.controler");
const { verifyToken, verifyTokenAuthorization } = require("./verifyToken");

//update user
router.put("/:id", verifyToken, UserUpdate);

//delete user
router.delete("/:id", verifyTokenAuthorization, UserDelete);

//get user
router.get("/:id", verifyToken, UserGet);

//get all user
router.get("/", verifyToken, UserGetAll);

module.exports = router;
