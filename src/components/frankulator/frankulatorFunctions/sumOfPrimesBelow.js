import primeNumberOrNot from './primeNumberOrNot';
import * as is from '../stringConstants/stringConstants';

const sumOfPrimeBelow = (inputNum) => {
  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  } else if (String(inputNum).length > 6) {
    return is.TOO_LONG;
  } else if (inputNum < 3) {
    return 0;
  }

  let sumOfPrimes = 2;
  let possiblePrime = 3;
  while (possiblePrime < inputNum) {
    if (primeNumberOrNot(possiblePrime).endsWith(is.PRIME)) {
      sumOfPrimes += possiblePrime;
    }
    possiblePrime += 2;
  }
  
  return sumOfPrimes;
};

export default sumOfPrimeBelow;
