import primeNumberOrNot from './primeNumberOrNot';

const sumOfPrimeBelow = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  if (String(inputNum).length > 6) {
    return inputNum = "Sorry, number is too long";
  }

  if (inputNum < 3) {
    return 0;
  }
  let sumOfPrimes = 0, possiblePrime = 3;
  while (possiblePrime < inputNum) {
    let itIsPrime = primeNumberOrNot(possiblePrime).slice(-8) === "is prime";

    if (itIsPrime) {
      sumOfPrimes += possiblePrime;
    }
    possiblePrime += 2;
  }

  return sumOfPrimes += 2;

};

export default sumOfPrimeBelow;
