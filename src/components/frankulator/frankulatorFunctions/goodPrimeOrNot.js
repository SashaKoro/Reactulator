import primeNumberOrNot from './primeNumberOrNot';
import * as is from '../stringConstants/stringConstants';

const goodPrimeOrNot = (inputNum) => {
  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  } else if (primeNumberOrNot(inputNum).endsWith(is.NOT_PRIME)) {
    return `${inputNum}${is.NOT_PRIME}`;
  }

  let primeAbove = inputNum + 1;
  while (primeNumberOrNot(primeAbove).endsWith(is.NOT_PRIME)) primeAbove += 1;

  let secondPrimeAbove = primeAbove + 1;
  while (primeNumberOrNot(secondPrimeAbove).endsWith(is.NOT_PRIME)) secondPrimeAbove += 1;

  let primeBelow = inputNum - 1;
  while (primeNumberOrNot(primeBelow).endsWith(is.NOT_PRIME)) {
    primeBelow -= 1;
    if (primeBelow === 0) {
      return `${inputNum}${is.NON_GOOD_PRIME}`;
    }
  }

  let secondPrimeBelow = primeBelow - 1;
  while (primeNumberOrNot(secondPrimeBelow).endsWith(is.NOT_PRIME)) {
    secondPrimeBelow -= 1;
    if (secondPrimeBelow === 0) {
      return `${inputNum}${is.NON_GOOD_PRIME}`;
    }
  }

  return (Math.pow(inputNum, 2) > (primeAbove * primeBelow) &&
          Math.pow(inputNum, 2) > (secondPrimeAbove * secondPrimeBelow))

    ? `${inputNum}${is.GOOD_PRIME}` : `${inputNum}${is.NON_GOOD_PRIME}`;
};

export default goodPrimeOrNot;
