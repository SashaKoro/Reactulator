import primeNumberOrNot from './primeNumberOrNot';

const largestPrimeFactor = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  let lastLargest = "No prime factor", possibleFactor = 2;
  while (possibleFactor <= inputNum / possibleFactor) {

    if (inputNum % possibleFactor === 0) {

      let otherFactor = (inputNum / possibleFactor);

      if (primeNumberOrNot(possibleFactor).slice(-8) === "is prime") {
        lastLargest = possibleFactor;
      }
      if (primeNumberOrNot(otherFactor).slice(-8) === "is prime") {
        lastLargest = otherFactor;
      }
    }
    possibleFactor += 1;
  }
  return lastLargest;
};

export default largestPrimeFactor;
