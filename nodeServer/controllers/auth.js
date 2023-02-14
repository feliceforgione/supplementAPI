const User = require("../models/User.js");
const bcrypt = require("bcrypt");

module.exports = {
  signUp: async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        username,
        password: hashPassword,
      });
      req.session.user = newUser;
      res.status(201).json({
        status: "success",
        data: {
          user: newUser,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "fail",
      });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user)
        return res.status(404).json({
          status: "fail",
          message: "User not found",
        });
      const isAuthenticated = await bcrypt.compare(password, user.password);
      if (isAuthenticated) {
        req.session.user = user;
        res.status(200).json({
          status: "success",
        });
      } else {
        res.status(400).json({
          status: "fail",
          message: "Incorrect username or password",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "fail",
      });
    }
  },
};
