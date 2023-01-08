const router = require("express").Router();
const {
  AddOrder,
  UpdateOrder,
  DeleteOrder,
  GetUserOrders,
  GetAllOrders,
} = require("../controleres/order.controler");
const { verifyToken, verifyTokenAndAdmin } = require("../routes/verifyToken");

//Add Order
router.post("/", verifyToken, AddOrder);

//Update Order
router.put("/:id", verifyTokenAndAdmin, UpdateOrder);

//Delete Order
router.delete("/:id", verifyTokenAndAdmin, DeleteOrder);

//Get Users Orders
router.get("/:userId", verifyToken, GetUserOrders);

//Get All Orders
router.get("/", verifyTokenAndAdmin, GetAllOrders);

module.exports = router;
