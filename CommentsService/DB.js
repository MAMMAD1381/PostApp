const postComments = {}
const crypto = require('crypto')

exports.getComments = function(postId){
    return postComments[postId]
}

exports.addComment = function(postId, comment){
    comment.id = crypto.randomBytes(4).toString('hex')
    let comments = postComments[postId] || []
    comments.push(comment)
    postComments[postId] = comments

    return comment
}