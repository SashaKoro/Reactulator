import primeNumberOrNot from './primeNumberOrNot';

const semiPrimeOrNot = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  let firstFactor = 1;
  while (firstFactor <= inputNum / firstFactor) {
    if (primeNumberOrNot(firstFactor).endsWith("is prime")) {
      if (inputNum % firstFactor === 0) {
        let otherFactor = (inputNum / firstFactor);
        if(primeNumberOrNot(otherFactor).endsWith("is prime")) {
          return inputNum + " is a semiprime";
        }
      }
    }
    firstFactor ++;
  }
  return inputNum + " is NOT a semiprime";
};

export default semiPrimeOrNot;
