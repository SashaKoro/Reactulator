import primeNumberOrNot from './primeNumberOrNot';

const largestPrimeFactor = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  let lastLargest = "No prime factor", possibleFactor = 2;
  while (possibleFactor <= inputNum / possibleFactor) {

    if (inputNum % possibleFactor === 0) {

      let largerFactor = (inputNum / possibleFactor);

      if (primeNumberOrNot(possibleFactor).endsWith("is prime")) {
        lastLargest = possibleFactor;
      }
      if (primeNumberOrNot(largerFactor).endsWith("is prime")) {
        lastLargest = largerFactor;
      }
    }
    possibleFactor += 1;
  }
  return lastLargest;
};

export default largestPrimeFactor;
