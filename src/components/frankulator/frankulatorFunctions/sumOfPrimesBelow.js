import primeNumberOrNot from './primeNumberOrNot';
import * as is from '../stringConstants/stringConstants';

const sumOfPrimeBelow = inputNum => {

  switch(true){
    case /[a-z]/i.test(inputNum):
      return inputNum;
    case String(inputNum).length > 6:
      return is.TOO_LONG;
    case inputNum < 3:
      return 0;
  }

  let sumOfPrimes = 0, possiblePrime = 3;
  while (possiblePrime < inputNum) {
    let itIsPrime = primeNumberOrNot(possiblePrime).endsWith(is.PRIME);

    if (itIsPrime) {
      sumOfPrimes += possiblePrime;
    }
    possiblePrime += 2;
  }
  return sumOfPrimes + 2;
};

export default sumOfPrimeBelow;
