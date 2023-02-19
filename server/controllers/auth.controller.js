const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwtDecode = require("jwt-decode");
const { validationResult } = require("express-validator");
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res
        .status(400)
        .json({ error: "That username is already in use." });
    }

    const existingUseremail = await User.findOne({ email });

    if (existingUseremail) {
      return res
        .status(400)
        .json({ error: "That email address is already in use." });
    }

    const user = new User({
      username,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
    const registeredUser = await user.save();
    if (registeredUser) {
      const payload = {
        id: registeredUser.id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "30m",
      });
      const decodetoken = jwtDecode(token);
      const expiresAt = decodetoken.exp;
      const { username, email, id, role } = registeredUser;

      const userInfo = {
        username,
        email,
        id,
        role,
      };

      res.status(200).json({
        success: true,
        token: `Bearer ${token}`,
        userInfo,
        expiresAt,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send({ error: "Invalid Credentials." });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        error: "Invalid Credentials.",
      });
    }
    if (isMatch) {
      const payload = {
        id: user.id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "30m",
      });
      const decodetoken = jwtDecode(token);
      const expiresAt = decodetoken.exp;
      const { username, email, id, role } = user;

      const userInfo = {
        username,
        email,
        id,
        role,
      };

      res.status(200).json({
        success: true,
        token: `Bearer ${token}`,
        userInfo,
        expiresAt,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

module.exports = { register, login };
