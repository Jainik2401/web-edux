const router = require("express").Router();
const {
  AddCart,
  UpdateCart,
  DeleteCart,
  GetUserCart,
} = require("../controleres/cart.controler");
const {
  verifyToken,
  verifyTokenAuthorization,
} = require("../routes/verifyToken");

//Add Cart
router.post("/", verifyToken, AddCart);

//Update Cart
router.put("/:id", verifyToken, UpdateCart);

//Delete Cart
router.delete("/:id", verifyToken, DeleteCart);

//Get Cart
router.get("/:userId", verifyToken, GetUserCart);

module.exports = router;
