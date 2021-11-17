const express = require("express");
const authRouter = require("./auth.routes");

const mainApiRouter = express.Router();

mainApiRouter.use("/auth", authRouter);

module.exports = mainApiRouter;
