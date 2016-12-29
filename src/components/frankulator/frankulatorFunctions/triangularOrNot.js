const triangularOrNot = function(inputNum) {

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
  if (String(inputNum).length > 12) {
    inputNum = "Sorry, number is too long";
    return inputNum;
  }
  inputNum = Number(inputNum);
  let triNum = 1;
  let triAdd = 2;
  while (inputNum != triNum) {
    if (triNum > inputNum) {
      return inputNum + " is NOT tri";
    }
    triNum += triAdd;
    triAdd += 1;
  }
  return inputNum + " is a tri number";
};

export default triangularOrNot;
