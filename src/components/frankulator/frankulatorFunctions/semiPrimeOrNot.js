import primeNumberOrNot from './primeNumberOrNot';
import * as is from '../stringConstants/stringConstants';

const semiPrimeOrNot = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  let firstFactor = 1;
  while (firstFactor <= inputNum / firstFactor) {
    if (primeNumberOrNot(firstFactor).endsWith(is.PRIME)) {
      if (inputNum % firstFactor === 0) {
        let otherFactor = (inputNum / firstFactor);
        if(primeNumberOrNot(otherFactor).endsWith(is.PRIME)) {
          return inputNum + is.SEMIPRIME;
        }
      }
    }
    firstFactor ++;
  }
  return inputNum + is.NOT_SEMIPRIME;
};

export default semiPrimeOrNot;
