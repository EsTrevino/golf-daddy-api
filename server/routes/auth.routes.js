const express = require("express");
const profileController = require("../controllers/profile.controller");

const authRouter = express.Router();

authRouter.post("/login", profileController.logUserIn);
authRouter.post("/register", profileController.registerUser);

module.exports = authRouter;
