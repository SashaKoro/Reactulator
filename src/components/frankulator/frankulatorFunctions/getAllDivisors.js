import * as has from "../stringConstants/stringConstants";

const getAllDivisors = inputNum => {

  switch(true){
    case /[a-z]/i.test(inputNum):
      return inputNum;
    case inputNum === 0:
      return has.INFINITE_NUM_DIVISORS;
  }

  let potentialDivisor = 1, divisorCount = 0;
  while (potentialDivisor <= inputNum/potentialDivisor) {
    if (inputNum % potentialDivisor === 0) {
      if(Math.pow(potentialDivisor, 2) === inputNum) {
        divisorCount --;
      }
      divisorCount += 2;
    }
    potentialDivisor ++;
  }
  return divisorCount;
};

export default getAllDivisors;
