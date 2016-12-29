const factorial = function(inputNum) {

  if (/[a-z]/i.test(inputNum) === true || inputNum === ".") {
    inputNum = "";
  }
  if (/\./.test(inputNum) === true) {
    inputNum = "Number must be an Integer";
    return inputNum;
  }
  if (inputNum === "") {
    inputNum = "Please enter a number";
    return inputNum;
  }
  if (String(inputNum).length > 3) {
    return "Infinity";
  }
  inputNum = Number(inputNum);

  if (inputNum === 0) {
    return 1;
  }
  let i = (inputNum - 1);
  while (i > 1) {
    inputNum *= i;
    i -= 1;
  }
  return inputNum;
};

export default factorial;
