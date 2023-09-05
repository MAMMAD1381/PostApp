const express = require('express')
const {getComments, createComment, newEvent} = require('./controller')
const router = express.Router({ mergeParams: true })


router.route('/').get(getComments).post(createComment)
router.route('/event').post(newEvent)


module.exports = router