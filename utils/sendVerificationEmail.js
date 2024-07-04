const nodemailer = require("nodemailer")

const sendVerificationEmail = async ({ email, token, expiresAt }) => {
    try {
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "saunihair@gmail.com",
                pass: "rzcdukxvhenuzqub"
            }
        });
        // jvcn oynf onrj jqxp

        // const mailOption ={
        //     from:"pratap.bairagi.test@gmail.com",
        //     to:options.email,
        //     subject:options.subject,
        //     text:options.message
        // }

        const verificationLink = `https://hair-solution.vercel.app/verify-account/${token}`;

        let info = await transporter.sendMail({
            from: 'saunihair@gmail.com', // sender address
            to: "saunihair@gmail.com", // list of receivers
            subject: 'Verify Your Account', // Subject line
            html: `
                <div style='width: "100vw"; height: "max-content"; min-height:"100vh"; display:"flex"; flex-direction:"column"; '>
                <b style=" margin-top: '18px'; ">Hello there,</b>
                <p style="">Thank you for registering with us. Please click on the link below to verify your account:</p>
                <a href="${verificationLink}">${verificationLink}</a>
                <p>This link will expire at ${expiresAt.toLocaleString()}.</p>
                <p>If you did not request this, please ignore this email.</p>
                <p>Regards,<br/>SA UNI HAIR Team</p>
                </div>
            `
        })

        return info

    } catch (error) {
        throw new Error(error)
    }
};

module.exports = sendVerificationEmail;