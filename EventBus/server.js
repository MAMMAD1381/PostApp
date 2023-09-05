const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const port = 3004
const cors = require('cors')
const postUrl = 'http://posts-srv:3002/posts/event' //todo add port
const commentUrl = 'http://comments-srv:3001/posts/123456/comments/event'
const queryUrl = 'http://query-srv:3003/queryservice/event'

const app = express()
app.use(bodyParser())
app.use(cors())

app.route('/event').post(async (req, res) => {
    let event = req.body
    console.log(event)
    await axios.post(postUrl, { event }, { Headers: 'Content-type:Application/json' })
    await axios.post(commentUrl, { event }, { Headers: 'Content-type:Application/json' })
    await axios.post(queryUrl, { event }, { Headers: 'Content-type:Application/json' })

    res.status(200).send({ success: true })
})

app.listen(port, () => {
    console.log('server is listening on port:' + port)
})
