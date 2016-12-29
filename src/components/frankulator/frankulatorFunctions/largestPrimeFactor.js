import primeNumberOrNot from './primeNumberOrNot';

const largestPrimeFactor = function(inputNum) {

  if (/[a-z]/i.test(inputNum) === true || inputNum === ".") {
    inputNum = "";
  }
  if (String(inputNum).length > 15) {
    inputNum = "Sorry, number is too long";
    return inputNum;
  }
  if (/\./.test(inputNum) === true) {
    inputNum = "Number must be an Integer";
    return inputNum;
  }
  if (inputNum === "") {
    return "Please enter a number";
  }
  inputNum = Number(inputNum);

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
