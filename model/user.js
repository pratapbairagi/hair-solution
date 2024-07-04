const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name field is required !"]
    },
    email: {
        type: String,
        require: [true, "Email field is required !"]
    },
    number: {
        type: Number,
        require: [true, "Number field is required !"]
    },
    gender: {
        type: String,
        require: [true, "Gender field is required !"]
    },
    experience: {
        type: String
    },
    role: {
        type: String,
        default: "employee"
    },
    specialist: {
        type: String
    },
    password: {
        type: String
    },
    verificationToken: {
        token: String,
        expiresAt: Date
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next()
    };

    let hashPassword = await bcrypt.hash(this.password, 10);

    this.password = hashPassword

    return next()
});

userSchema.statics.generateVerificationLink = async function () {
    const token = uuidv4();

    let expiresAt = new Date()

    expiresAt.setHours(expiresAt.getHours() + 24);

    return { token, expiresAt }
}

// generate token
userSchema.methods.generateToken = async function () {
    const token = jsonwebtoken.sign({ id: this._id }, "iyfoahf owaehf/q3er048t0458 fdueyef3265232\yr0xdutbw8r0u0w;ZZ-20EQ3['LWE,F\[]")
    return token
};

userSchema.methods.generateAccessToken = async function () {
    let accessToken = jsonwebtoken.sign({
        id: this._id,
        email: this.email,
        name: this.name
    }, "iyfoahf owaehf/q3er048t0458 fdueyef3265232\yr0xdutbw8r0u0w;ZZ-20EQ3['LWE,F\[]",
        { expiresIn: "15m" }
    );

    return accessToken;
}

userSchema.methods.generateRefreshToken = async function () {
    let refreshToken = jsonwebtoken.sign(
        {
            id: this._id
        },
        "iyfoahf owaehf/q3er048t0458 fdueyef3265232\yrascwctb8wt23dho2daz.d03i2pfhcbqww9ZZ-20EQ3['LWE,F\[]",
        { expiresIn: "1d" }
    );

    return refreshToken;
}


// compare password
userSchema.methods.comparePassword = async function (oldPassword) {

    const isPasswordMatch = await bcrypt.compare(oldPassword, this.password);

    return isPasswordMatch
}

const User = mongoose.model("User", userSchema);

module.exports = User;