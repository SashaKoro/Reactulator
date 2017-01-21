import * as is from '../stringConstants/stringConstants';

const collatzStepCount = inputNum => {

  if (/[a-z]/i.test(inputNum)) return inputNum;

  if(inputNum === 0) return is.INPUT_POSITIVE_INT;

  let stepCount = 0;
  while (inputNum !== 1) {

    if (inputNum % 2 === 0) {
      inputNum /= 2;
    }
    else {
      inputNum = (inputNum * 3) + 1;
    }
    stepCount ++;
  }
  return stepCount;
};

export default collatzStepCount;
