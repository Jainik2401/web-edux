const User = require("../models/User");
const cryptoJs = require("crypto-js");

exports.UserUpdate = async (req, res) => {
  if (req.body.password) {
    req.body.password = cryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString();
  }

  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updateUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.UserDelete = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User has been deleted successfuly!");
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.UserGet = async (req, res) => {
  try {
    const userInfo = await User.findById(req.params.id);
    const { password, ...othersInfo } = userInfo._doc;
    res.status(200).send(othersInfo);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.UserGetAll = async (req, res) => {
  const query = req.query.latest;
  try {
    let users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    users = users.map((obj) => {
      const { password, ...otherInfo } = obj._doc;
      return otherInfo;
    });
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};
