import primeNumberOrNot from './primeNumberOrNot';
import semiPrimeOrNot from './semiPrimeOrNot';

const chenPrimeOrNot = function(inputNum) {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  if (inputNum < 2) {
    inputNum += " is NOT prime";
    return inputNum;
  }

  if (primeNumberOrNot(inputNum).slice(-8) === "is prime") {
    if (primeNumberOrNot(inputNum + 2).slice(-8) === "is prime" || semiPrimeOrNot(inputNum + 2).slice(-14) === "is a semiprime") {
      inputNum += " is a chenprime";
      return inputNum;
    }
    inputNum += " is a non-chen prime";
    return inputNum;
  }

  inputNum += " is NOT prime";
  return inputNum;
};

export default chenPrimeOrNot;
