
const express = require("express");
const { userRegister, userLogin, userUpdate, userLogged, userLogout, userAccountVerify } = require("../controller/user");
const userAuth = require("../middleware/userAuth")
const userRouter = express();

userRouter.route("/login").post(userLogin);
userRouter.route("/register").post(userRegister);
userRouter.route("/user").get();
userRouter.route("/users").get();
userRouter.route("/userUpdate").put(userUpdate);
userRouter.route("/userDelete").delete();

userRouter.route("/logged").get( userAuth, userLogged )
userRouter.route("/user/auth/logout").get( userLogout )

userRouter.route("/verify-account/:token").get(userAccountVerify)




module.exports = userRouter;