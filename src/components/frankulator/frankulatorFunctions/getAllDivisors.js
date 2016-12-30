const getAllDivisors = function(inputNum) {

  if (inputNum === 0) {
    return "infinite number of divisors";
  }

  let potentialDivisor = 1;
  let divisorCount = 0;
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
