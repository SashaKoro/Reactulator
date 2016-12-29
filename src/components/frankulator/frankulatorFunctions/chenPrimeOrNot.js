function chenPrimeGenerator(x) {
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
  if (x < 2) {
    x += " is NOT prime";
    return x;
  }
  if (ifPrime(x).slice(-8) === "is prime") {
    if (ifPrime(x + 2).slice(-8) === "is prime" || semiPrimeGenerator(x + 2).slice(-14) === "is a semiprime") {
      x += " is a chenprime";
      return x;
    }
    x += " is a non-chen prime";
    return x;
  }
  x += " is NOT prime";
  return x;
}
