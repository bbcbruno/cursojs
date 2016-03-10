

//nao pode simplesmente definir uma funcao sem nome e nao fazer nada
//ex:
//function() {}

// Isso eh valido
(function() {})


var c = (function(){});
console.log(c); // Eh uma funcao


//Funcao auto executavel. Os parenteses pode ficar apos as chaves ou do lado de fora.
//Immediately-Invoked Function Expression

// 1:
(function(){
  console.log("====> hello");
}());

// 2:
(function(){})();
