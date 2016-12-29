function fibGenerator(x) {
  if ( /[a-z]/i.test(x) === true || x === ".") {
    if (/\+/.test(x) != true) {
      x = "";
    }
  }
  if (x === "") {
    return "Please enter a number";
  }
  x = Number(x);

  if (x === 1 || x === 0) {
    return 0;
  }
  var firstFib = 1;
  var secondFib = 0;
  var fib_Sum = 0;
  while (firstFib + secondFib < x) {
    firstFib += secondFib;
    secondFib = (firstFib - secondFib);
    fib_Sum += firstFib;
  }
  return fib_Sum + 1;
}
