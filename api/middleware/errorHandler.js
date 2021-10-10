const createError = require('http-errors');

const notFoundHandler = (req, res, next) => {
    next(createError(404, 'your requested page was not found'));
}

const errorHandler = (err,req,res,next) => {
    res.json(err);
}

module.exports = {
    notFoundHandler,
    errorHandler
}