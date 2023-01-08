const Order = require("../models/Order");

exports.AddOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const saveOrder = await newOrder.save();
    res.status(200).send(saveOrder);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.UpdateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.DeleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).send("Order has been removed!");
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.GetUserOrders = async (req, res) => {
  try {
    const userOrder = await Order.find({ userId: req.params.userId });
    res.status(200).send(userOrder);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.GetAllOrders = async (req, res) => {
  try {
    const allOrder = await Order.find();
    console.log(allOrder);
    res.status(200).send(allOrder);
  } catch (err) {
    res.status(500).send(err);
  }
};
