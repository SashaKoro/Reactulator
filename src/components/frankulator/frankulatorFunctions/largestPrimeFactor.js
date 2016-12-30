import primeNumberOrNot from './primeNumberOrNot';

const largestPrimeFactor = function(inputNum) {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  let lastLargest = "No prime factor";
  let k = 2;
  while (k <= inputNum / k) {
    if (inputNum % k === 0) {
      let otherFactor = (inputNum / k);
      if (primeNumberOrNot(k).slice(-8) === "is prime") {
        lastLargest = k;
      }
      if (primeNumberOrNot(otherFactor).slice(-8) === "is prime") {
        lastLargest = otherFactor;
      }
    }
    k += 1;
  }
  return lastLargest;
};

export default largestPrimeFactor;
