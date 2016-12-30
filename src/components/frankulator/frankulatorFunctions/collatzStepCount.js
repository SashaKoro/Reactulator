const collatzStepCount = function(inputNum) {

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
