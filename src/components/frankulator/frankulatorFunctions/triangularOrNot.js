function triangularNumberGenerator(x) {
  if (/[a-z]/i.test(x) === true || x === ".") {
    x = "";
  }
  if (x === "") {
    return "Please enter a number";
  }
  if (/\./.test(x) === true) {
    x = "Number must be an Integer";
    return x;
  }
  if (String(x).length > 12) {
    x = "Sorry, number is too long";
    return x;
  }
  x = Number(x);
  var triNum = 1;
  var triAdd = 2;
  while (x != triNum) {
    if (triNum > x) {
      return x + " is NOT tri";
    }
    triNum += triAdd;
    triAdd += 1;
  }
  return x + " is a tri number";
}
