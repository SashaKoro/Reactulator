import primeNumberOrNot from './primeNumberOrNot';

const goodPrimeOrNot = function(inputNum) {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  if (inputNum < 2) {
    inputNum += " is NOT prime";
    return inputNum;
  }

  if (primeNumberOrNot(inputNum).slice(-8) !== "is prime") {
    inputNum += " is NOT prime";
    return inputNum;
  }

  let spot = inputNum + 1;
  while (primeNumberOrNot(spot).slice(-8) !== "is prime") {
    spot += 1;
  }
  let secondSpot = spot + 1;
  while (primeNumberOrNot(secondSpot).slice(-8) !== "is prime") {
    secondSpot += 1;
  }
  let thirdSpot = inputNum - 1;
  while (primeNumberOrNot(thirdSpot).slice(-8) !== "is prime") {
    thirdSpot -= 1;
    if (thirdSpot == 0) {
      inputNum += " is a non-good prime";
      return inputNum;
    }
  }
  let fourthSpot = thirdSpot - 1;
  while (primeNumberOrNot(fourthSpot).slice(-8) !== "is prime") {
    fourthSpot -= 1;
    if (fourthSpot == 0) {
      inputNum += " is a non-good prime";
      return inputNum;
    }
  }
  if (inputNum * inputNum > spot * thirdSpot && inputNum * inputNum > secondSpot * fourthSpot) {
    inputNum += " is a good prime";
    return inputNum;
  }
  inputNum += " is a non-good prime";
  return inputNum;
};

export default goodPrimeOrNot;
