function goodPrimeGenerator(x) {
  if (/[a-z]/i.test(x) === true || x === ".") {
    x = "";
  }
  if (String(x).length > 15) {
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
  if (ifPrime(x).slice(-8) !== "is prime") {
    x += " is NOT prime";
    return x;
  }
  var spot = x + 1;
  while (ifPrime(spot).slice(-8) !== "is prime") {
    spot += 1;
  }
  var secondSpot = spot + 1;
  while (ifPrime(secondSpot).slice(-8) !== "is prime") {
    secondSpot += 1;
  }
  var thirdSpot = x - 1;
  while (ifPrime(thirdSpot).slice(-8) !== "is prime") {
    thirdSpot -= 1;
    if (thirdSpot == 0) {
      x += " is a non-good prime";
      return x;
    }
  }
  var fourthSpot = thirdSpot - 1;
  while (ifPrime(fourthSpot).slice(-8) !== "is prime") {
    fourthSpot -= 1;
    if (fourthSpot == 0) {
      x += " is a non-good prime";
      return x;
    }
  }
  if (x * x > spot * thirdSpot && x * x > secondSpot * fourthSpot) {
    x += " is a good prime";
    return x;
  }
  x += " is a non-good prime";
  return x;
}
