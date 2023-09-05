const express = require('express')
const {getPosts, createPost, newEvent} = require('./controller')
const router = express.Router()


router.route('/').get(getPosts).post(createPost)

router.route('/event').post(newEvent)


module.exports = router