
var john = {
  name: "John",
  sayName: function() {
    console.log("Hi! My name is:", this.name);
  }
};

john.sayName();

var bob = {name: "Bob"};
var mary = {name: "Mary"};

//Como o primeiro parametro do call eh o this.... agora vai imprimir Bob
john.sayName.call(bob);
john.sayName.apply(bob);


// Como manter o escopo interno (this) fixo
// O bind deixa o escopo intero fixo
var sayName = john.sayName.bind(mary);

sayName(); // imprime mary
sayName.call(bob); // imprime mary pois o escopo esta fixo
sayName.apply(john); // imprime marry pois o escopo esta fixo


