// 1 -  declara variaveis
// 2 -  declara funcoes

//Equivalente a
//var hello;
//function hello(){} - a funcao sobrescreve a variavel pois ambos tem o mesmo nome

hello();

var hello = "hello";

function hello() {
  console.log("hello there!");
}

console.log(hello);

//Chamar a funcao aqui nao funciona mais pois a variavel sobrescreveu a funcao pois ambos tem o mesmo nome
//a partir da atribuicao, somente existe a variavel... a funcao ja nao existe mais.
//hello();
