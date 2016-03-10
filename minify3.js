
(function(){
  var MyApp = {};

  MyApp.init = function() {
  
  };

  MyApp.loadData = function() {
  
  }

}());

// minificado:
// (function(){var a={};a.init=function(){};a.loadData=function(){}}())
// Minifica tudo pois esta no escopo de uma funcao
//
// Se estivesse no escopo global o resultado seria:
// var MyApp={};MyApp.init=function(){};MyApp.loadData=function(){};
//
// Funcao/variavel global nao tem como minificar.
