var start = 0;

function A() {
  var a = 1;

  function B() {
    var b = 2;

    function C() {
      var c = 3;

      console.log('[C]: start = ', start);
      console.log('[C]: a = ', a);
      console.log('[C]: b = ', b);
      console.log('[C]: c = ', c);
    }

    console.log('[B]: start = ', start);
    console.log('[B]: a = ', a);
    console.log('[B]: b = ', b);
    console.log('[B]: c = ', typeof(c));
    C();
  }
  console.log('[A]: start = ', start);
  console.log('[A]: a = ', a);
  console.log('[A]: b = ', typeof(b));
  console.log('[A]: c = ', typeof(c));
  var start = "WTF?";
  B();
}

A();

