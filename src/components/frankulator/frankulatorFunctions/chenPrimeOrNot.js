import primeNumberOrNot from './primeNumberOrNot';
import semiPrimeOrNot from './semiPrimeOrNot';

const chenPrimeOrNot = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  if (inputNum < 2) {
    return inputNum += " is NOT prime";
  }

  if (primeNumberOrNot(inputNum).slice(-8) === "is prime") {
    if (primeNumberOrNot(inputNum + 2).slice(-8) === "is prime" || semiPrimeOrNot(inputNum + 2).slice(-14) === "is a semiprime") {
      return inputNum += " is a chenprime";
    }
    return inputNum += " is a non-chen prime";
  }

  return inputNum += " is NOT prime";

};

export default chenPrimeOrNot;
