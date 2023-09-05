const { addPost, getPosts, getPost } = require('./DB')
const ErrorResponse = require('./ErrorResponse')
const axios = require('axios')
const url = 'http://event-bus-srv:3004/event'

exports.createPost = async function (req, res, next) {
    if (!req.body.title)
        return next(new ErrorResponse(`including a title for post is required`, 400))
    let post = addPost({ title: req.body.title })
    await axios.post(
        url,
        { event: 'post created', data: post },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
    res.status(201).send({ success: true, data: post })
}

exports.getPosts = async function (req, res, next) {
    let posts = getPosts()
    res.status(200).send({ success: true, data: posts })
}

exports.newEvent = async function (req, res, next) {
    let event = req.body
    console.log(event)
    res.status(200).send({ success: true })
}
