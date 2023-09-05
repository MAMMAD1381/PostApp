class ErrorResponse extends Error{
    constructor(message='server error', errCode=500){
        super(message)
        this.errCode = errCode

    }
}

module.exports = ErrorResponse