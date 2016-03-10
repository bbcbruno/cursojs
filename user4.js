//=========================================================================
// funcao construtora
function BlogList() {
  // Como convencao... para indicar que o atributo eh privado, utiliza-se o _ antes do nome do mesmo
  // ex: this._list = [] indica que voce nao deveria acessar esse atributo
  this._list = [];
}

// prototype armazena os atributos/funcoes de instancia. Logo, sao compartilhados
// Armazenar aqui o que eh compartilhado
BlogList.prototype.addBlog = function(attrs) {
  var blog = new Blog(attrs); 
  this._list.push(blog);
  return blog;
};

//=========================================================================

function Blog(attrs) {
  // Como estou criando o blog, ja estou inicializando os posts com um array vazio;
  // Logo... todo novo blog ja tem uma lista vazia de posts
  this.posts = [];
  for(var name in attrs) {
    //cria os atributos dinamicamente;
    //ex: foi passado o objeto {bolinha: Xpto}
    //resultado: this[bolinha] = Xpto
    this[name] = attrs[name];
  }
}

Blog.prototype.addPost = function(attrs) {
  var post = new Post(attrs);
  this.posts.push(post);
  return post;
}

//=========================================================================

function Post(attrs) {
  this.comments = [];

  for (var name in attrs) {
    this[name] = attrs[name];
  }
}

Post.prototype.addComment = function(attrs) {
  var comment = new Comment(attrs);
  this.comments.push(comment);
  return comment;
}

//=========================================================================

function Comment(attrs) {
  for (var name in attrs) {
    this[name] = attrs[name];
  }
}

//=========================================================================

var blogs = new BlogList();
//console.log(blogs.constructor);
//console.log(blogs instanceof BlogList)

var medium = blogs.addBlog({name: "Medium.com"})
var wordpress = blogs.addBlog({name: "Wordpress.com"})
var post = medium.addPost({title: "Aprendendo JS"});
var comment = post.addComment({author: "Bruno", content: "Valeu!!" })

console.log(medium.name)
console.log(wordpress.name)

console.log(medium.__proto__ === Blog.prototype)
console.log(wordpress.__proto__ === Blog.prototype)
console.log(wordpress.__proto__ === medium.__proto__)
console.log(post.title)
console.log(comment.author)
console.log(comment.content)
