const { addComment, getComments } = require('./DB')
const ErrorResponse = require('./ErrorResponse')
const axios = require('axios')
const url = 'http://event-bus-srv:3004/event'

exports.createComment = async function (req, res, next) {
    if (!req.params.id) return next(new ErrorResponse(`including the post id is required`, 400))
    if (!req.body.comment)
        return next(new ErrorResponse(`including a body for comment is required`, 400))
    let comment = addComment(req.params.id, { comment: req.body.comment })
    comment.postId = req.params.id
    await axios.post(
        url,
        { event: 'comment created', data: comment },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
    res.status(201).send({ success: true, data: comment })
}

exports.getComments = async function (req, res, next) {
    if (!req.params.id) return next(new ErrorResponse(`including the post id is required`, 400))
    let comments = getComments(req.params.id)
    res.status(200).send({ success: true, data: comments })
}

exports.newEvent = async function (req, res, next) {
    let event = req.body
    console.log(event)
    res.status(200).send({ success: true })
}
