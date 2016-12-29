function sumOfPrimesGenerator(x) {
  if (/[a-z]/i.test(x) === true || x === ".") {
    x = "";
  }
  if (String(x).length > 6) {
    x = "Sorry, number is too long";
    return x;
  }
  if (x === "") {
    return "Please enter a number";
  }
  x = Number(x);
  if (x < 3) {
    return 0;
  }
  var totalSum = 0;
  var i = 3;
  while (i < x) {
    if (ifPrime(i).slice(-8) === "is prime") {
      totalSum += i;
    }
    i += 2;
  }
  totalSum += 2;
  return totalSum;
}
