// variaveis
// vars: message
// functions: say


var message = 'Hello';

function say() {
  //vars: message
  //Sendo assim... vai imprimir undefined pois ele primeiro vai criar as variaveis existente em todo esse escopo
  //e quando uma variavel eh criada... comeca com o valor undefined.
  //BRISA
  //aqui nao imprime pois a variavel nesse escopo ainda tem o como valor: undefined
  console.log(message);

  if(true) {
    var message = 'WTF?';
  }
  // Aqui vai imprimir pois a variavel ja tem valor
  console.log(message);
}

say();
