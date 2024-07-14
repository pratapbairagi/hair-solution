const ErrorHandler = require("../middleware/errorHandler")

module.exports = (role) => {
    return (req, res, next) => {
        if( role.some(v=> v === req.user.role ) ){
            return next()        
        }
        return next( new ErrorHandler("You are not authorized to do this task !", 400))
    }
}