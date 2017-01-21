import primeNumberOrNot from './primeNumberOrNot';
import * as is from '../stringConstants/stringConstants';

const sumOfPrimeBelow = inputNum => {

  if (/[a-z]/i.test(inputNum)) return inputNum;

  if (String(inputNum).length > 6) return is.TOO_LONG;

  if (inputNum < 3) return 0;

  let sumOfPrimes = 2, possiblePrime = 3;

  while (possiblePrime < inputNum) {
    if (primeNumberOrNot(possiblePrime).endsWith(is.PRIME)) {
      sumOfPrimes += possiblePrime;
    }
    possiblePrime += 2;
  }
  return sumOfPrimes;
};

export default sumOfPrimeBelow;
