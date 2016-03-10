
var _createPost = function(post) {
  if(!post.comments) { post.comments = [] } 

  post.createComment = _createComment;

  this.posts.push(post);
  return post;
}

var _createComment = function(comment){
  this.comments.push(comment);
}

var blogs = [];
blogs.createBlog = function(blog) {
  if(!blog.posts) { blog.posts = [] }

  blog.createPost = _createPost;

  this.push(blog);
  return blog;
}

var blog = blogs.createBlog({name: "Simples Ideias"});
blogs.createBlog({name: "Bruno Campos"});
var post = blog.createPost({title: "Entendo OOP com Js"});
blog.createPost({title: "Testando JS"});

post.createComment({author: "John", content: "Ok!"});
post.createComment({author: "Bruno", content: "Vlw!!!"});

blogs.forEach(function(blog){

  console.log("=", blog.name);
  console.log("==", blog.posts.length);

  var comments = blog.posts.reduce(function(buffer, post){
    return buffer + post.comments.length;
  }, 0);

  console.log("==", comments);

});

