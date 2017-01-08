import primeNumberOrNot from './primeNumberOrNot';
import semiPrimeOrNot from './semiPrimeOrNot';

const chenPrimeOrNot = inputNum => {

  switch(true){
    case (/[a-z]/i.test(inputNum)):
      return inputNum;
    case (inputNum < 2):
      return inputNum + " is NOT prime";
  }

  if (primeNumberOrNot(inputNum).endsWith("is prime")) {
    if (primeNumberOrNot(inputNum + 2).endsWith("is prime") || semiPrimeOrNot(inputNum + 2).endsWith("is a semiprime")) {
      return inputNum + " is a chenprime";
    }
    return inputNum + " is a non-chen prime";
  }
  return inputNum + " is NOT prime";
};

export default chenPrimeOrNot;
