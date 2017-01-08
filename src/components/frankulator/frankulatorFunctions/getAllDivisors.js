const getAllDivisors = inputNum => {

  switch(true){
    case /[a-z]/i.test(inputNum):
      return inputNum;
    case inputNum === 0:
      return "infinite number of divisors";
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
