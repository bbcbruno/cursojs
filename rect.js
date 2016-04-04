//prototype = funcoes/atributos instancia
//funcao = funcoes/atributos de classe (metodos estaticos)

function Rect (width, height) {
  this.width = width;
  this.height = height;
}

Rect.prototype.area = function() {
  return this.width * this.height;
}

Rect.prototype.perimeter = function() {
  return this.width*2 + this.height*2;
}

//===========================================================

function Square(width) {
  Rect.call(this, width, width); 
}

// Object.create(prototype) faz a copia(clone) do prototype e retorna para ser utilizada pelo Square
Square.prototype = Object.create(Rect.prototype); // Heranca
Square.prototype.constructor = Square;

// Square.prototype = Rect.prototype; tambem funcionaria
// mas nesse caso ambas "classes" compartilhariam o mesmo prototype, logo tudo o que for adicionado ao Square
// seria adiciondo tambem ao Rect e vice-versa.


Square.prototype.diagonal = function() {
  return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
}

//===========================================================


var rect = new Rect(3,5);
console.log("-> rect 3x5 (area):", rect.area())
console.log("-> rect 3x5 (perimeter):", rect.perimeter())


var square = new Square(5,5);
console.log(square);
console.log("-> square 5x5 (area):", square.area());
console.log("-> square 5x5 (perimeter):", square.perimeter());
console.log("-> square 5x5 (diagonal):", square.diagonal());
console.log("Is square a Rect? ", square instanceof Rect);
console.log("Is square a Square? ", square instanceof Square);
console.log("Who generated this object? ", square.constructor);

