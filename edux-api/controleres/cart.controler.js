const Cart = require("../models/Cart");

exports.AddCart = async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const saveCart = await newCart.save();
    res.status(200).send(saveCart);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.UpdateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedCart);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.DeleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).send("Item has been removed!");
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.GetUserCart = async (req, res) => {
  try {
    const userCart = await Cart.find({ userId: req.params.userId });
    res.status(200).send(userCart);
  } catch (err) {
    res.status(500).send(err);
  }
};
