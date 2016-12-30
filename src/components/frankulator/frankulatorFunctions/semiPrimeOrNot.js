import primeNumberOrNot from './primeNumberOrNot';

const semiPrimeOrNot = function(inputNum) {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  inputNum = Number(inputNum);
  if (inputNum < 4) {
    inputNum += " is NOT a semiprime";
    return inputNum;
  }
  let firstFactor = 1;
  while (firstFactor <= inputNum / firstFactor) {
    if (primeNumberOrNot(firstFactor).slice(-8) === "is prime") {
      if (inputNum % firstFactor === 0) {
        let otherFactor = (inputNum / firstFactor);
        if(primeNumberOrNot(otherFactor).slice(-8) === "is prime") {
          inputNum += " is a semiprime";
          return inputNum;
        }
      }
    }
    firstFactor += 1;
  }
  inputNum += " is NOT a semiprime";
  return inputNum;
};

export default semiPrimeOrNot;
