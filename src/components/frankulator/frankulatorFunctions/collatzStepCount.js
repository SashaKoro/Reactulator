import * as is from '../stringConstants/stringConstants';

const collatzStepCount = (inputNum) => {
  let input = inputNum;
  if (/[a-z]/i.test(input)) {
    return input;
  }
  if (input === 0) {
    return is.INPUT_POSITIVE_INT;
  }
  let stepCount = 0;
  while (input !== 1) {
    if (input % 2 === 0) {
      input /= 2;
    } else {
      input = (input * 3) + 1;
    }
    stepCount += 1;
  }

  return stepCount;
};

export default collatzStepCount;
