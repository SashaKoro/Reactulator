import primeNumberOrNot from './primeNumberOrNot';

const goodPrimeOrNot = inputNum => {

  switch(true){
    case /[a-z]/i.test(inputNum):
      return inputNum;
    case primeNumberOrNot(inputNum).endsWith("NOT prime"):
      return inputNum + " is NOT prime";
  }

  let spot = inputNum + 1;
  while (primeNumberOrNot(spot).endsWith("NOT prime")) {
    spot ++;
  }

  let secondSpot = spot + 1;
  while (primeNumberOrNot(secondSpot).endsWith("NOT prime")) {
    secondSpot ++;
  }

  let thirdSpot = inputNum - 1;
  while (primeNumberOrNot(thirdSpot).endsWith("NOT prime")) {
    thirdSpot --;
    if (Object.is(thirdSpot, 0)) {
      return inputNum + " is a non-good prime";
    }
  }

  let fourthSpot = thirdSpot - 1;
  while (primeNumberOrNot(fourthSpot).endsWith("NOT prime")) {
    fourthSpot --;
    if (Object.is(fourthSpot, 0)) {
      return inputNum + " is a non-good prime";
    }
  }

  if (Math.pow(inputNum, 2) > (spot * thirdSpot) && Math.pow(inputNum, 2) > (secondSpot * fourthSpot)) {
    return inputNum + " is a good prime";
  } else {
    return inputNum + " is a non-good prime";
  }
};

export default goodPrimeOrNot;
