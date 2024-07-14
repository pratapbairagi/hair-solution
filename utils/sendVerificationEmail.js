const nodemailer = require("nodemailer")

const sendVerificationEmail = async ({type="", email="", client={} , token="", expiresAt="" }) => {
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
       
        let to;
        let link;

        if(type === "review"){
            to = email

        }
        if(type === "register"){
            to = "saunihair@gmail.com"
        }

        if( type === "review" ){
            link = `https://hair-solution.vercel.app/client/review/write?clientName=${client.clientName}&clientId=${client.clientId}&entityType=${client.entityType}&entityId=${client.entityId}&entityName=${client.entityName}&entityImage=${client.entityImage}&entityTakenDate=${client.entityTakenDate}&entityAmount=${client.entityAmount}&entityOther=${client.entityOther}`;
        }
        if( type === "register" ){
            link = `https://hair-solution.vercel.app/verify-account/${token}`;
        }

        let info = await transporter.sendMail({
            from: 'saunihair@gmail.com', // sender address
            to: to, // list of receivers
            subject: type === "review" ? "SA Uni Hair Review" : 'Verify Your Account' , // Subject line
            html: type === "review" ?  `
                <div style='width: "100vw"; height: "max-content"; min-height:"100vh"; display:"flex"; flex-direction:"column"; '>
                <b style=" margin-top: '18px'; ">Hello ${client.clientName},</b>
                 <p style="">Thank you for choosing us. We would like to have your thoughts about us and our product/service, Please share your feedback with us, link given below. :</p>
                <a href="${link}" > ${link}</a>
                <p style='margin-top: "10px";'>If you did not request this, please ignore this email.</p>
                <p>Regards, <br/> SA UNI HAIR Team</p>
                </div>
            `
            :
            `
                <div style='width: "100vw"; height: "max-content"; min-height:"100vh"; display:"flex"; flex-direction:"column"; '>
                <b style=" margin-top: '18px'; ">Hello there,</b>
                 <p style="">Thank you for registering with us. Please click on the link below to verify your account:</p>
                <a href="${link}" > ${link}</a>
                <p>This link will expire at ${expiresAt.toLocaleString() }.</p>
                <p>If you did not request this, please ignore this email.</p>
                <p>Regards, <br/> SA UNI HAIR Team</p>
                </div>
            `
        })

        return info

    } catch (error) {
        throw new Error(error)
    }
};

module.exports = sendVerificationEmail;