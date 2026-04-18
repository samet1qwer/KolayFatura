require("dotenv").config();
const express = require("express");
const router = express.Router();
const xss = require("xss");
const path = require("path");
const userModel = require("../../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../../middlewares/auth");
const validator = require("validator");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: xss(email) });

    if (!user) {
      return res.status(401).json({ message: "E-posta veya şifre hatalı" });
    }

    const isMatch = await bcrypt.compare(xss(password), user.password);

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

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await userModel.findOne({ email: xss(email) });
    if (existingUser) {
      return res.status(401).json({ message: "Bu e-posta zaten kullanılıyor" });
    }
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Lütfen tüm alanları doldurun" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Şifre en az 6 karakter olmalıdır" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Geçersiz e-posta adresi" });
    }
    if (!name.trim()) {
      return res.status(400).json({ message: "Lütfen geçerli bir isim girin" });
    }
    if (!email.trim()) {
      return res
        .status(400)
        .json({ message: "Lütfen geçerli bir e-posta adresi girin" });
    }
    if (!password.trim()) {
      return res
        .status(400)
        .json({ message: "Lütfen geçerli bir şifre girin" });
    }
    const user = new userModel({
      name: xss(name),
      email: xss(email),
      password: hashedPassword,
    });

    await user.save();

    return res.status(201).json({ message: "Kullanıcı oluşturuldu" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Sunucu hatası" });
  }
});

module.exports = router;
