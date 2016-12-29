function collatzTry(x) {
  if (/\./.test(x) === true) {
    if (/\+/.test(x) != true) {
      x = "Number must be an Integer";
      return x;
    }
  }
  if (/[a-z]/i.test(x) === true || x === ".") {
    if (/\+/.test(x) != true) {
      x = "";
    }
  }
  if (x === "") {
    return "Please enter a number";
  }
  x = Number(x);
  if (x === 0) {
    return "Input must be a positive integer";
  }
  var steps = 0;
  while (x != 1) {
    if (x % 2 == 0) {
      x /= 2;
    } else {
      x = (x * 3) + 1;
    }
    steps += 1;
  }
  return steps;
}
