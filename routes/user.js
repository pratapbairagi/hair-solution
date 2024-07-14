
const express = require("express");
const { userRegister, userLogin, userUpdate, userLogged, userLogout, userAccountVerify, getUsers, staffUpdate, deleteStaff, publicStaffs } = require("../controller/user");
const userAuth = require("../middleware/userAuth.js");
const userRole = require("../utils/userRole");
const userRouter = express();

userRouter.route("/login").post(userLogin);
userRouter.route("/register").post(userRegister);
userRouter.route("/user").get();
userRouter.route("/users/:data").get(userAuth, userRole(["admin", "owner"]), getUsers);
userRouter.route("/contact/public/:data").get( getUsers);
userRouter.route("/userUpdate/:id").put(userAuth, userUpdate);
userRouter.route("/userDelete/:id").delete( userAuth, userRole(["owner"]), deleteStaff);

userRouter.route("/public/staffs").get( publicStaffs )


userRouter.route("/logged").get( userAuth, userLogged )
userRouter.route("/user/auth/logout").get( userLogout )

userRouter.route("/admin/staffUpdate/:id").post( userAuth, userRole(["admin", "owner"]), staffUpdate);

userRouter.route("/verify-account/:token").get(userAccountVerify)




module.exports = userRouter;