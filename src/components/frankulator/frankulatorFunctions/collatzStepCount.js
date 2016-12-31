const collatzStepCount = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  if (Object.is(inputNum, 0)) {
    return "Input must be a positive integer";
  }

  let stepCount = 0;
  while (inputNum != 1) {
    if (inputNum % 2 == 0) {
      inputNum /= 2;
    } else {
      inputNum = (inputNum * 3) + 1;
    }
    stepCount += 1;
  }
  return stepCount;
};

export default collatzStepCount;
