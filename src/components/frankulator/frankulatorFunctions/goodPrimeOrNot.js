import primeNumberOrNot from './primeNumberOrNot';

const goodPrimeOrNot = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  if (inputNum < 2 || primeNumberOrNot(inputNum).endsWith("NOT prime")) {
    return inputNum += " is NOT prime";
  }

  let spot = inputNum + 1;
  while (primeNumberOrNot(spot).endsWith("NOT prime")) {
    spot += 1;
  }

  let secondSpot = spot + 1;
  while (primeNumberOrNot(secondSpot).endsWith("NOT prime")) {
    secondSpot += 1;
  }

  let thirdSpot = inputNum - 1;
  while (primeNumberOrNot(thirdSpot).endsWith("NOT prime")) {
    thirdSpot -= 1;
    if (thirdSpot == 0) {
      return inputNum += " is a non-good prime";
    }
  }

  let fourthSpot = thirdSpot - 1;
  while (primeNumberOrNot(fourthSpot).endsWith("NOT prime")) {
    fourthSpot -= 1;
    if (fourthSpot == 0) {
      return inputNum += " is a non-good prime";
    }
  }

  if (inputNum * inputNum > spot * thirdSpot && inputNum * inputNum > secondSpot * fourthSpot) {
    return inputNum += " is a good prime";
  } else {
    return inputNum += " is a non-good prime";
  }
};

export default goodPrimeOrNot;
