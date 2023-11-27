const { errors } = require('../errors')

const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch(statusCode) {
        case errors.VALIDATION_ERROR:
            res.json({
                title: 'Validation error',
                message: err.message,
                stackTrace: err.stack
            })
            break
        case errors.UNAUTHORIZED:
            res.json({
                title: 'Unauthorized',
                message: err.message,
                stackTrace: err.stack
            })
            break
        case errors.FORBIDDEN:
            res.json({
                title: 'Forbidden',
                message: err.message,
                stackTrace: err.stack
            })
            break
        case errors.NOT_FOUND:
            res.json({
                title: 'Not found',
                message: err.message,
                stackTrace: err.stack
            })
            break
        case errors.SERVER_ERROR:
            res.json({
                title: 'Server error',
                message: err.message,
                stackTrace: err.stack
            })
            break
        default:
            console.log('no errors')
            break
    }
}
module.exports = errorHandler