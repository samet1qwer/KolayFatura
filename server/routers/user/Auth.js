require("dotenv").config();
const express = require("express");
const router = express.Router();
const xss = require("xss");
const path = require("path");
const userModel = require("../../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../../middlewares/auth");
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: xss(email) });

    if (!user) {
      return res.status(401).json({ message: "E-posta veya şifre hatalı" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "E-posta veya şifre hatalı" });
    }

    const token = generateToken(user);

    return res.status(200).json({
      message: "Giriş başarılı",
      token: token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Sunucu hatası" });
  }
});

module.exports = router;
