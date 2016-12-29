function largestPrimeFactorSearch(x) {
  if (/[a-z]/i.test(x) === true || x === ".") {
    x = "";
  }
  if (String(x).length > 15) {
    x = "Sorry, number is too long";
    return x;
  }
  if (/\./.test(x) === true) {
    x = "Number must be an Integer";
    return x;
  }
  if (x === "") {
    return "Please enter a number";
  }
  x = Number(x);
  var lastLargest = "No prime factor";
  var k = 2;
  while (k <= x / k) {
    if (x % k === 0) {
      var otherFac = (x / k);
      if (ifPrime(k).slice(-8) === "is prime") {
        lastLargest = k;
      }
      if (ifPrime(otherFac).slice(-8) === "is prime") {
        lastLargest = otherFac;
      }
    }
    k += 1;
  }
  return lastLargest;
}
