const User = require("../models/User");
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

exports.RegisterUser = async (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: cryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });
  try {
    const addUser = await newUser.save();
    res.status(200).json(addUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.LoginUser = async (req, res) => {
  try {
    const userInfo = await User.findOne({ username: req.body.username });

    !userInfo && res.status(401).send({ message: "User not found!!" });

    const decPassword = cryptoJs.AES.decrypt(
      userInfo.password,
      process.env.PASSWORD_SECRET
    );
    const userPassword = decPassword.toString(cryptoJs.enc.Utf8);

    userPassword !== req.body.password &&
      res.status(401).send({ message: "Password not match!!" });

    const accessToken = jwt.sign(
      {
        id: userInfo._id,
        isAdmin: userInfo.isAdmin,
        username: userInfo.username,
      },
      process.env.JWT_SECRETE,
      { expiresIn: "1d" }
    );

    // const { password, ...others } = userInfo._doc;

    res.status(200).json({ accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};
