function ifPrime(x) {
  if (/[a-z]/i.test(x) === true || x === ".") {
    x = "";
  }
  if (String(x).length > 13) {
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
  if (x === 2 || x === 3) {
    x += " is prime";
    return x;
  }
  if (x === 1 || x % 2 === 0) {
    x += " is NOT prime";
    return x;
  }
  var i = 3;
  while (i <= (x / i)) {
    if (x % i === 0) {
      x += " is NOT prime";
      return x;
    }
    i += 2;
  }
  x += " is prime";
  return x;
}
