
var func = function(name, email) {
  console.log("name: ", name);
  console.log("email: ", email);
  console.log("this: " + this.nome);
  console.log("");
}

func("bruno", "teste@gmail.com");

// func.call
// Bom para quando vc ja conhece os argumentos
// o primeiro argumento (null) vai representar o this dentro da funcao chamada

var teste = {
  nome: "Camila"
}

func.call(teste, "PS4", "ps4@gmail.com");

// func.apply
// Chama a funcao passando um array
// Otimo pra chamar dinamicamente
// o primeiro argumento (null) vai representar o this dentro da funcao chamada
func.apply(teste, ["Xbox One", "xone@gmail.com"]);

