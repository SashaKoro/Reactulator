import * as is from '../stringConstants/stringConstants';

const primeNumberOrNot = inputNum => {

  if (/[a-z]/i.test(inputNum)) return inputNum;

  if (inputNum === 2 || inputNum === 3) return inputNum + is.PRIME;

  if (inputNum === 1 || inputNum % 2 === 0) return inputNum + is.NOT_PRIME;

  let possibleFactor = 3;
  while (possibleFactor <= (inputNum / possibleFactor)) {
    let itsAFactor = inputNum % possibleFactor === 0;
    if (itsAFactor) return inputNum + is.NOT_PRIME;
    possibleFactor += 2;
  }
  return inputNum + is.PRIME;
};

export default primeNumberOrNot;
