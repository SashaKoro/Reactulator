import primeNumberOrNot from './primeNumberOrNot';
import * as is from '../stringConstants/stringConstants';

const largestPrimeFactor = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  let lastLargest = is.NO_PRIME_FACTOR, possibleFactor = 2;
  while (possibleFactor <= inputNum / possibleFactor) {

    if (inputNum % possibleFactor === 0) {

      let largerFactor = (inputNum / possibleFactor);

      if (primeNumberOrNot(possibleFactor).endsWith(is.PRIME)) {
        lastLargest = possibleFactor;
      }
      if (primeNumberOrNot(largerFactor).endsWith(is.PRIME)) {
        lastLargest = largerFactor;
      }
    }
    possibleFactor ++;
  }
  return lastLargest;
};

export default largestPrimeFactor;
