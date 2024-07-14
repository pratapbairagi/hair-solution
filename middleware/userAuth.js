const User = require("../model/user");
const ErrorHandler = require("./errorHandler");
const jsonwebtoken = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  try {
    let { refreshToken, accessToken } = req.cookies;

    if (!refreshToken) {
      return next(new ErrorHandler("Invalid authentication token !"));
    }

    let { id } = jsonwebtoken.verify(refreshToken, "iyfoahf owaehf/q3er048t0458 fdueyef3265232\yrascwctb8wt23dho2daz.d03i2pfhcbqww9ZZ-20EQ3['LWE,F\[]")

    if (!id) {
      return next(new ErrorHandler("Login required, session expired !"));
    }

    const user = await User.findById(id)

    if (!user) {
      return next(new ErrorHandler("Login required !"));
    }

    if (!accessToken) {
      accessToken = await user.generateAccessToken();
      const accessCookieOption = {
        httpOnly: true,
        maxAge: (15 * 60 * 1000),
        // secure: true,
        // path: "/"
        // sameSite : "none"
      };

      await res.cookie("accessToken", accessToken, accessCookieOption)
    }

    req.user = user;

    next()

  } catch (error) {
    return next(new ErrorHandler(error))
  }
}

module.exports = userAuth