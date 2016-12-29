const woodallNumberOf = function(inputNum) {

  if (/[a-z]/i.test(inputNum) === true || inputNum === ".") {
    inputNum = "";
  }
  if (inputNum === "") {
    return "Please enter a number";
  }
  if (/\./.test(inputNum) === true) {
    inputNum = "Number must be an Integer";
    return inputNum;
  }
  inputNum = Number(inputNum);
  return inputNum * Math.pow(2, inputNum) - 1;
};

export default woodallNumberOf;
