function digitSumCounter(x) {
  if (/[a-z]/i.test(x) === true || x === ".") {
    x = "";
  }
  if (x === "") {
    return "Please enter a number";
  }
  x = Number(x);
  var dig_Sum = 0;
  var z = 0;
  for (var i = 0; i < (String(x).length); i ++) {
    if (String(x).charAt(i) != ".") {
      dig_Sum += parseInt(String(x).charAt(i));
    }
  }
  return dig_Sum;
}
