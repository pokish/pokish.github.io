function foo() {
  var a = 2;
  function buzz() {
    console.log(a);
  }
  bar(buzz);
}
function bar(fn) {
  fn();
}

foo();
