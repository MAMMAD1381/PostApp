const posts = []
const crypto = require('crypto')

exports.getPosts = function(){

    return posts
}

exports.getPost = function(id){
    posts.forEach((post) => post.id === id)
    return undefined
}

exports.addPost = function(post){
    let id = crypto.randomBytes(4).toString('hex')
    post.id = id
    posts.push(post)
    return post
}