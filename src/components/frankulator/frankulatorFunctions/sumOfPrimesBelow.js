import primeNumberOrNot from './primeNumberOrNot';

const sumOfPrimeBelow = inputNum => {

  switch(true){
    case /[a-z]/i.test(inputNum):
      return inputNum;
    case String(inputNum).length > 6:
      return "Sorry, number is too long";
    case inputNum < 3:
      return 0;
  }

  let sumOfPrimes = 0, possiblePrime = 3;
  while (possiblePrime < inputNum) {
    let itIsPrime = primeNumberOrNot(possiblePrime).endsWith("is prime");

    if (itIsPrime) {
      sumOfPrimes += possiblePrime;
    }
    possiblePrime += 2;
  }
  return sumOfPrimes + 2;
};

export default sumOfPrimeBelow;
