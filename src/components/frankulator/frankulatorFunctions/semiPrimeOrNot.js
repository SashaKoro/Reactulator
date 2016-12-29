import primeNumberOrNot from './primeNumberOrNot';

const semiPrimeOrNot = function(inputNum) {

  if (/\./.test(inputNum) === true) {
    inputNum = "Number must be an Integer";
    return inputNum;
  }
  if (/[a-z]/i.test(inputNum) === true || inputNum === ".") {
    inputNum = "";
  }
  if (inputNum === "") {
    return "Please enter a number";
  }
  if (String(inputNum).length > 12) {
    inputNum = "Sorry, number is too long";
    return inputNum;
  }
  inputNum = Number(inputNum);
  if (inputNum < 4) {
    inputNum += " is NOT a semiprime";
    return inputNum;
  }
  let firstFactor = 1;
  while (firstFactor <= inputNum / firstFactor) {
    if (primeNumberOrNot(firstFactor).slice(-8) === "is prime") {
      if (inputNum % firstFactor === 0) {
        let otherFactor = (inputNum / firstFactor);
        if(primeNumberOrNot(otherFactor).slice(-8) === "is prime") {
          inputNum += " is a semiprime";
          return inputNum;
        }
      }
    }
    firstFactor += 1;
  }
  inputNum += " is NOT a semiprime";
  return inputNum;
};

export default semiPrimeOrNot;
