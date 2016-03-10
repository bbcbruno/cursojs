
// Posso passar parametros
(function(message){
  console.log("===> " + message);
})("Hi there!");

// algum mane
undefined = 1;

(function(window, document, undefined){
  //undefined eh undefined nesse momento;
})(window, document);

