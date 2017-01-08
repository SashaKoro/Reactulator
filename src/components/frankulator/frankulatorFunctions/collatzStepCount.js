const collatzStepCount = inputNum => {

  switch(true){
    case (/[a-z]/i.test(inputNum)):
      return inputNum;
    case inputNum === 0:
      return "Input must be a positive integer";
  }

  let stepCount = 0;
  while (inputNum !== 1) {
    if (inputNum % 2 === 0) {
      inputNum /= 2;
    } else {
      inputNum = (inputNum * 3) + 1;
    }
    stepCount ++;
  }
  return stepCount;
};

export default collatzStepCount;
