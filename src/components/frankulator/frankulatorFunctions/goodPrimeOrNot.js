import primeNumberOrNot from './primeNumberOrNot';
import * as is from '../stringConstants/stringConstants';

const goodPrimeOrNot = inputNum => {

  if (/[a-z]/i.test(inputNum)) return inputNum;

  if (primeNumberOrNot(inputNum).endsWith(is.NOT_PRIME)) return inputNum + is.NOT_PRIME;

  let spot = inputNum + 1;
  while (primeNumberOrNot(spot).endsWith(is.NOT_PRIME)) spot++;

  let secondSpot = spot + 1;
  while (primeNumberOrNot(secondSpot).endsWith(is.NOT_PRIME)) secondSpot ++;

  let thirdSpot = inputNum - 1;
  while (primeNumberOrNot(thirdSpot).endsWith(is.NOT_PRIME)) {
    thirdSpot --;
    if (thirdSpot === 0) return inputNum + is.NON_GOOD_PRIME;
  }

  let fourthSpot = thirdSpot - 1;
  while (primeNumberOrNot(fourthSpot).endsWith(is.NOT_PRIME)) {
    fourthSpot --;
    if (fourthSpot === 0) return inputNum + is.NON_GOOD_PRIME;
  }

  if (Math.pow(inputNum, 2) > (spot * thirdSpot) &&
    Math.pow(inputNum, 2) > (secondSpot * fourthSpot)) {
    return inputNum + is.GOOD_PRIME;
  } else return inputNum + is.NON_GOOD_PRIME;
};

export default goodPrimeOrNot;
