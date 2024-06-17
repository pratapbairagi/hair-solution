
const express = require("express");

const userRouter = express();

userRouter.route("/users").get();


module.exports = userRouter;