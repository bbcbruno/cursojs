
var blogs = [];

function createBlog(list, attrs) {
  if(!attrs.posts) {attrs.posts = [] }
  list.push(attrs);
  return attrs;
}

function createPost(blog, attrs) {
  if(!attrs.comments){ attrs.comments = []}
  blog.posts.push(attrs);
  return attrs;
}

function createComment(post, attrs) {
  post.comments.push(attrs);
}

var blog = createBlog(blogs, {name: "Simples Ideias"});

var post = createPost(blog, {title: "Entendo OOP com Js"});
createPost(blog, {title: "Testando JS"});

createComment(post,{author: "John", content: "Ok!"});
createComment(post,{author: "Bruno", content: "Vlw!!!"});


blogs.forEach(function(blog){

  console.log("=", blog.name);
  console.log("==", blog.posts.length);

  var comments = blog.posts.reduce(function(buffer, post){
    return buffer + post.comments.length;
  }, 0);

  console.log("==", comments);

});

