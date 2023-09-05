# PostApp

## Description

the purpose of this simple project is microservices, docker, kubernetes
the node-js and react part of project are as funumentals, you can create posts with a title and add comments to them.

## Services
**client**: simple UI built with react.<br>
**PostsService**: responsible for creating posts, built with node-js.<br>
**CommentsService**: responsible for adding comments to desired post, built with node-js.<br>
**EventBus**: responsible for forwarding and receving events from other services, built with node-js.<br>
**QueryService**: react application receives it's data from this service which contains 
a bundle of posts and comments.


## Usage
run `skaffold dev` in root dirrectory
In order to run the project easily.
