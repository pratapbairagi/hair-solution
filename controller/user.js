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
            createdAt: new Date(),
            verificationToken: {
                token,
                expiresAt
            }
        });

        const user = await newUser.save();

        await sendVerificationEmail({type:"register",email, token, expiresAt});

        res.status(201).json({
            success: true,
            message: "Account created successfully, need to verify account by Owner. Link sent to the owner email ."
        })

    } catch (error) {
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
            // secure : true,
            // path : "/"
            // sameSite : "none"
        }

        const accessCookieOption = {
            httpOnly: true,
            maxAge: ( 15 * 60 * 1000),
            // secure : true,
            // path : "/"
            // sameSite : "none"
        }

        const user = await User.findById(isEmailExist._id).select("-password -verificationToken")
        
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
        console.log("update 0")
        const { id } = req.params;
        const { name, number, email, gender, experience, specialist } = req.body;
        console.log("update 1", experience)
        
        const isUserExist = await User.findById(id);

        if (!isUserExist) {
            return next(new ErrorHandler("User does not exist !", 404))
        }

        await User.findByIdAndUpdate(id, {name, number, email, gender, specialist, experience});

        const updatedUser = await User.findById(id).select("-password -verificationToken")

        res.status(200).json({
            success: true,
            message: "Profile updated successfully !",
            user: updatedUser
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.staffUpdate = async (req, res, next) => {
    try {
        console.log("role")

        const { id } = req.params;
        const { role, isVerified } = req.body;

        console.log("verified frontend", isVerified)
        
        const isUserExist = await User.findById(id);

        if (!isUserExist) {
            return next(new ErrorHandler("User does not exist !", 404))
        }

        // console.log("user", isUserExist)

        let verified;

        if( isVerified || isVerified === "Yes" ){
            verified = true
        }
        if( !isVerified || isVerified === "no"){
            verified = false
        }

        isUserExist.role = role;
        isUserExist.isVerified =  verified

        await isUserExist.save()

        const users = await User.find().select("-password -verificationToken")

        res.status(200).json({
            success: true,
            message: "Staff updated successfully !",
            users: users
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}


exports.userLogged = async (req, res, next) => {

    try {
        let user = req.user;

        if (!user) {
            return next(new ErrorHandler("Need to login !", 400))
        }

        user = await User.findById(user._id).select("-password -verificationToken")

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

exports.getUsers = async (req, res, next) => {
    try {
        const {data} = req.params;

        let users;
        
        if(data === "specialist"){
            users = await User.find().select("-verificationToken -password -role -createdAt")
        }
        else{
            users = await User.find().select("-verificationToken -password")
        }
        const totalStaff = await User.countDocuments();

        res.status(200).json({
            success : true,
            message : "",
            users,
            totalStaff
        });

    } catch (error) {
        return next(new ErrorHandler(error))
    }

}

exports.deleteStaff = async (req, res, next) => {
    try {
        const {id} = req.params;

        const isStaffExist = await User.findById(id);

        if(!isStaffExist){
            return next( new ErrorHandler("User does not exist or deleted !", 404))
        }

        await User.findByIdAndDelete(id)
        
        const totalStaff = await User.countDocuments();
        const users = await User.find().select("-verificationToken -password -role -createdAt")


        res.status(200).json({
            success : true,
            message : "User or Staff removed successfully !",
            users,
            totalStaff
        });

    } catch (error) {
        return next(new ErrorHandler(error))
    }

}

exports.publicStaffs = async (req, res, next) => {
    try {

        const staffs = await User.find().select("-password -verificationToken -createdAt -number -email -experience -role");

        res.status(200).json({
            success : true,
            message : "",
            staffs
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}