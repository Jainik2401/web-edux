const { verifyToken } = require("./verifyToken");
const {
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
  GetProduct,
  GetProductAll,
} = require("../controleres/product.controler");

const router = require("express").Router();

//create product
router.post("/", verifyToken, CreateProduct);

//update product
router.put("/:id", verifyToken, UpdateProduct);

//delete product
router.delete("/:id", verifyToken, DeleteProduct);

//get product
router.get("/:id", GetProduct);

//get all product
router.get("/", GetProductAll);

module.exports = router;
