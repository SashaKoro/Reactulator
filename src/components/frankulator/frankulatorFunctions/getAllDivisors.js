import * as has from "../stringConstants/stringConstants";

const getAllDivisors = inputNum => {

  if (/[a-z]/i.test(inputNum)) return inputNum;
  if (inputNum === 0) return has.INFINITE_NUM_DIVISORS;

  let potentialDivisor = 1, divisorCount = 0;
  while (potentialDivisor <= inputNum/potentialDivisor) {

    if (inputNum % potentialDivisor === 0) {
      divisorCount += 2;

      if (Math.pow(potentialDivisor, 2) === inputNum) {
        divisorCount --;
      }
    }
    potentialDivisor ++;
  }
  return divisorCount;
};

export default getAllDivisors;
