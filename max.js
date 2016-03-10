// Gera numero aleatorio de 0 a limit
function gen(limit) {
 return Math.floor(Math.random() * limit) ;
}

// Computa numeros
var numbers = [];

for (var i=0; i < 50; i++) {
  numbers.push(gen(100));
}

// Funciona com varios parametros mas nao funciona com arrays
console.log(Math.max(1,2,3,4,5,6));
//console.log(Math.max(numbers)); nao funciona

// Calcula numero maximo
// Jeito nao manjo de JS
var maxNumber = numbers[0];

for (var i = 0; i < numbers.length; i++) {
  maxNumber = Math.max(maxNumber, numbers[i]);
}

console.log("max nao manjo js: " + maxNumber);
// Fim jeito nao manjo

//Jeito conheco JS

console.log("max conheco js: " + Math.max.apply(null, numbers));




