

module.exports = async (err, req, res, next ) => {
    err.message = err.message || "Interval Server error"
    err.statusCode = err.statusCode || 500

    res.status(err.statusCode).json({
        success : false,
        message : err.message,
        stack : err.stack
    })
}