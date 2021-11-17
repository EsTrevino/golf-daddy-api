const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const service = require("../services/profile.service");

const controller = {};

controller.registerUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "invalid request" });
    }

    const user = await service.findByEmail(email);
    if (user) {
      return res.status(409).json({ error: "email already exists" });
    }

    const encrypted = await bcrypt.hash(password, 10);
    const { id } = await service.create({ email, password: encrypted });
    const token = jwt.sign({ id }, process.env.TOKEN_SECRET);

    res.status(201).json({ token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
};

controller.logUserIn = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "invalid request" });
  }

  const user = await service.findByEmail(email);
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {
      expiresIn: "2 days"
    });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ error: "Unauthorized" });
};

module.exports = controller;
