function semiPrimeGenerator(x) {
  if (/\./.test(x) === true) {
    x = "Number must be an Integer";
    return x;
  }
  if (/[a-z]/i.test(x) === true || x === ".") {
    x = "";
  }
  if (x === "") {
    return "Please enter a number";
  }
  if (String(x).length > 12) {
    x = "Sorry, number is too long";
    return x;
  }
  x = Number(x);
  if (x < 4) {
    x += " is NOT a semiprime";
    return x;
  }
  var firstFactor = 1;
  while (firstFactor <= x / firstFactor) {
    if (ifPrime(firstFactor).slice(-8) === "is prime") {
      if (x % firstFactor === 0) {
        var otherFactor = (x / firstFactor);
        if(ifPrime(otherFactor).slice(-8) === "is prime") {
          x += " is a semiprime";
          return x;
        }
      }
    }
    firstFactor += 1;
  }
  x += " is NOT a semiprime";
  return x;
}
