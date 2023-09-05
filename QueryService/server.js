const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3003

const app = express()
app.use(bodyParser())
app.use(cors())

const posts = {}

app.route('/queryservice/event').post((req, res) => {
  let event = req.body.event
  //? new post
  if(event.event === 'post created'){
    let post = event.data
    posts[post.id] = {
      id: post.id,
      title: post.title,
      comments: []
    }
    console.log(posts)
    console.log('new post')
  }

  //? new comment for a post
  if(event.event === 'comment created'){
    let comment = event.data
    console.log(comment)
    posts[comment.postId].comments.push({id: comment.id, comment: comment.comment})
    console.log(posts)
    console.log('new comment')
  }
  console.log(posts)
  // console.log(event)
  res.status(200).send({succses:true})
})

app.route('/queryservice/posts/').get((req, res) => {
  console.log('get posts requested')
  res.send({posts})
})

app.listen(port, () => {
  console.log(`server listening on port:${port}`)
})
