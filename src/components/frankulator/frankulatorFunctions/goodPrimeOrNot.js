import primeNumberOrNot from './primeNumberOrNot';
import * as is from '../stringConstants/stringConstants';

const goodPrimeOrNot = inputNum => {

  if (/[a-z]/i.test(inputNum)) return inputNum;

  if (primeNumberOrNot(inputNum).endsWith(is.NOT_PRIME)) return `${inputNum}${is.NOT_PRIME}`;

  let primeAbove = inputNum + 1;
  while (primeNumberOrNot(primeAbove).endsWith(is.NOT_PRIME)) primeAbove++;

  let secondPrimeAbove = primeAbove + 1;
  while (primeNumberOrNot(secondPrimeAbove).endsWith(is.NOT_PRIME)) secondPrimeAbove ++;

  let primeBelow = inputNum - 1;
  while (primeNumberOrNot(primeBelow).endsWith(is.NOT_PRIME)) {
    primeBelow --;
    if (primeBelow === 0) return `${inputNum}${is.NON_GOOD_PRIME}`;
  }

  let secondPrimeBelow = primeBelow - 1;
  while (primeNumberOrNot(secondPrimeBelow).endsWith(is.NOT_PRIME)) {
    secondPrimeBelow --;
    if (secondPrimeBelow === 0) return `${inputNum}${is.NON_GOOD_PRIME}`;
  }

  if (Math.pow(inputNum, 2) > (primeAbove * primeBelow) &&
    Math.pow(inputNum, 2) > (secondPrimeAbove * secondPrimeBelow)) {
    return `${inputNum}${is.GOOD_PRIME}`;
  } else return `${inputNum}${is.NON_GOOD_PRIME}`;
};

export default goodPrimeOrNot;
