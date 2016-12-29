import primeNumberOrNot from './primeNumberOrNot';

const sumOfPrimeBelow = function(inputNum) {

  if (/[a-z]/i.test(inputNum) === true || inputNum === ".") {
    inputNum = "";
  }
  if (String(inputNum).length > 6) {
    inputNum = "Sorry, number is too long";
    return inputNum;
  }
  if (inputNum === "") {
    return "Please enter a number";
  }
  inputNum = Number(inputNum);
  if (inputNum < 3) {
    return 0;
  }
  let sumOfPrimes = 0;
  let i = 3;
  while (i < inputNum) {
    if (primeNumberOrNot(i).slice(-8) === "is prime") {
      sumOfPrimes += i;
    }
    i += 2;
  }
  sumOfPrimes += 2;
  return sumOfPrimes;
};

export default sumOfPrimeBelow;
