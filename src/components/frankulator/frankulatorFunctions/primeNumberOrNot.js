const primeNumberOrNot = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  if (inputNum === 2 || inputNum === 3) {
    return inputNum += " is prime";
  }
  if (inputNum === 1 || inputNum % 2 === 0) {
    return inputNum += " is NOT prime";
  }


  let possibleFactor = 3;
  while (possibleFactor <= (inputNum / possibleFactor)) {
    let itsAFactor = inputNum % possibleFactor === 0;
    if (itsAFactor) {
      return inputNum += " is NOT prime";
    }
    possibleFactor += 2;
  }
  return inputNum += " is prime";
};

export default primeNumberOrNot;
