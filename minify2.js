
function init() {
  var foo = 1;
  var bar = 2;

  var zaz = {
    umaPropriedadeLongaPraCacete: 'yay'
  };

  console.log(foo);
  console.log(bar);
  console.log(zaz.umaPropriedadelongaPraCacete)
}

//minificado:
//function init(){var c=1;var b=2;var a={umaPropriedadeLongaPraCacete:"yay"};console.log(c);console.log(b);console.log(a.umaPropriedadelongaPraCacete)};
//
//Muda o resultado pois as variaveis existem somente dentro da funcao, 
//logo o compressor consegue identificar onde as mesmas estao sendo usadas e alterar os nomes
//Nao consegue minificar propriedades dentro de objetos
//


