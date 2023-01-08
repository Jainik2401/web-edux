const Product = require("../models/Product");

exports.CreateProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).send(saveProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.UpdateProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updateProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.DeleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("Product has been delete!");
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.GetProduct = async (req, res) => {
  try {
    const selectedProduct = await Product.findById(req.params.id);
    res.status(200).send(selectedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.GetProductAll = async (req, res) => {
  const color = req.query.color;
  const size = req.query.size;

  const colorFind = { color: color };
  const sizeFind = { size: size };
  try {
    const allProduct =
      color !== undefined && color !== "" && (size === undefined || size === "")
        ? await Product.find(colorFind)
        : size !== undefined &&
          size !== "" &&
          (color === undefined || color === "")
        ? await Product.find(sizeFind)
        : color !== undefined &&
          color !== "" &&
          (size !== undefined || size !== "")
        ? await Product.find({ color: color, size: size })
        : await Product.find();
    res.status(200).send(allProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};
