const collatzStepCount = function(inputNum) {

  if (/\./.test(inputNum) === true) {
    if (/\+/.test(inputNum) !== true) {
      inputNum = "Number must be an Integer";
      return inputNum;
    }
  }
  if (/[a-z]/i.test(inputNum) === true || inputNum === ".") {
    if (/\+/.test(inputNum) !== true) {
      inputNum = "";
    }
  }
  if (inputNum === "") {
    return "Please enter a number";
  }
  inputNum = Number(inputNum);
  if (inputNum === 0) {
    return "Input must be a positive integer";
  }
  let steps = 0;
  while (inputNum != 1) {
    if (inputNum % 2 == 0) {
      inputNum /= 2;
    } else {
      inputNum = (inputNum * 3) + 1;
    }
    steps += 1;
  }
  return steps;
};

export default collatzStepCount;
