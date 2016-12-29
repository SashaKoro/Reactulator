function divisorCounter(x) {
  if (/[a-z]/i.test(x) === true || x === ".") {
    x = "";
  }
  if (String(x).length > 16) {
    x = "Sorry, number is too long";
    return x;
  }
  if (x === "") {
    return "Please enter a number";
  }
  if (/\./.test(x) === true) {
    x = "Number must be an Integer";
    return x;
  }
  x = Number(x);
  if (x === 0) {
    return "infinite number of divisors";
  }
  var m = 1;
  var divCount = 0;
  while (m <= x/m) {
    if (x % m == 0) {
      if(m * m == x) {
        divCount -= 1;
      }
      divCount += 2;
    }
    m += 1;
  }
  return divCount;
}
