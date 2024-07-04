const User = require("../model/user");
const ErrorHandler = require("../middleware/errorHandler");
const sendVerificationEmail = require("../utils/sendVerificationEmail");



exports.userRegister = async (req, res, next) => {
    try {
        const { name, gender, number, email, specialist, experience, password, confirmPassword } = req.body;

        const isEmailExist = await User.findOne({ email: email });

        if (isEmailExist) {
            return next(new ErrorHandler("Email is already registered !"))
        }

        const isNumberExist = await User.findOne({ number: number });

        if (isNumberExist) {
            return next(new ErrorHandler("Number is already registered !", 400))
        };

        if (password !== confirmPassword) {
            return next(new ErrorHandler("Password and Confirm Password does not match !", 400))
        }

        const { token, expiresAt } = await User.generateVerificationLink()

        const newUser = new User({
            name,
            email,
            number,
            gender,
            experience,
            specialist,
            password,
            verificationToken: {
                token,
                expiresAt
            }
        });

        const user = await newUser.save();

        await sendVerificationEmail({email, token, expiresAt});

        res.status(201).json({
            success: true,
            message: "Account created successfully, need to verify account by Owner. Link sent to the owner email ."
        })

    } catch (error) {
        console.log("errror ", error)
        return next(new ErrorHandler(error))
    }
};

exports.userAccountVerify = async (req, res, next) => {
    try {
        const token = req.params.token;

        const user = await User.findOne({
            'verificationToken.token' : token,
            'verificationToken.expiresAt' : { $gt : new Date() }
        });

        if (!user) {
            return next(new ErrorHandler("Invalid or expired verification token."));
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        await user.save();

        res.status(200).json({ 
            success: true, 
            message: "Email verified successfully." 
        });


    } catch (error) {
        return next(new ErrorHandler(error))
    }
}


exports.userLogin = async (req, res, next) => {
    try {
        const { number, email, password } = req.body;

        const isEmailExist = await User.findOne({ email });


        if (!isEmailExist) {
            return next(new ErrorHandler(" Email is not registered !"))
        }

        if( !isEmailExist.isVerified ){
            return next( new ErrorHandler('Account not verified. Please verify your Account to login.', 400));
        };

        const comparePassword = await isEmailExist.comparePassword(password.toString());

        if (!comparePassword) {
            return next(new ErrorHandler("Invalid credential !", 400))
        };


        // const token = await isEmailExist.generateToken();
        const accessToken = await isEmailExist.generateAccessToken()
        const refreshToken = await isEmailExist.generateRefreshToken()

        const refresCookieOption = {
            httpOnly: true,
            maxAge: ( 24 * 60 * 60 * 1000),
            secure : true,
            path : "/"
            // sameSite : "none"
        }

        const accessCookieOption = {
            httpOnly: true,
            maxAge: ( 15 * 60 * 1000),
            secure : true,
            path : "/"
            // sameSite : "none"
        }

        const user = await User.findById(isEmailExist._id).select("-password -verificationToken -isVerified")
        
        res.status(200).cookie("accessToken", accessToken, accessCookieOption)
        .cookie("refreshToken", refreshToken, refresCookieOption).json({
            success: true,
            message: "",
            user: user
        })

    } catch (error) {
        return next(new ErrorHandler(" Invalid credential !"))

    }
};

exports.userUpdate = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, number, email, address, gender } = req.body;

        const isUserExist = await User.findById(id);

        if (!isUserExist) {
            return next(new ErrorHandler("User does not exist !", 404))
        }

        await User.findByIdAndUpdate(req.body);

        const updatedUser = await findById(id);

        res.status(200).json({
            success: true,
            message: "User updated successfully !",
            user: updatedUser
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.userLogged = async (req, res, next) => {
    console.log("logged")

    try {
        let user = req.user;

        if (!user) {
            return next(new ErrorHandler("Need to login !", 400))
        }

        user = await User.findById(user._id).select("-password -verificationToken -isVerified")

        res.status(200).json({
            success: true,
            message: "",
            user
        })
    } catch (error) {
        return next(new ErrorHandler(error))
    }
};


exports.userLogout = async (req, res, next) => {

    try {

        const cookieOptions = {
            httpOnly: true,
            maxAge: 0,
            path : "/",
            secure : true
        }

        res.clearCookie('accessToken', cookieOptions);
        res.clearCookie('refreshToken', cookieOptions);

       const {accessToken, refreshToken} = req.cookies;

       if( accessToken || refreshToken){

        return next( new ErrorHandler("Logout unsuccessful !", 400))
       }

        res.status(200).json({
            success: true,
            message: ""
        });

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}