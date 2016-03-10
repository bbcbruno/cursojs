function sum() {
  var numbers = Array.prototype.slice.call(arguments);
  console.log(numbers);
  return numbers.reduce(function(buffer, item) {
    return buffer + item;
  }, 0);
}

// O primeiro argumento é o this
// Os demais argumentos entram como argumentos da funcao... acessiveis pelo arguments
var sum10 = sum.bind(null, 10);
console.log(sum10(5));

