const getAllDivisors = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  if (Object.is(inputNum, 0)) {
    return "infinite number of divisors";
  }

  let potentialDivisor = 1, divisorCount = 0;
  while (potentialDivisor <= inputNum/potentialDivisor) {
    if (inputNum % potentialDivisor === 0) {
      if(potentialDivisor * potentialDivisor === inputNum) {
        divisorCount -= 1;
      }
      divisorCount += 2;
    }
    potentialDivisor += 1;
  }
  return divisorCount;
};

export default getAllDivisors;
