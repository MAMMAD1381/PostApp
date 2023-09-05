function errorHandler(error, req, res, next){
    console.log(error)
    res.status(error.errCode).send({success: false, error: error.message})

}

module.exports = errorHandler