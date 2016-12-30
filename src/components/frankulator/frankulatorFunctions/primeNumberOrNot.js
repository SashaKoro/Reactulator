const primeNumberOrNot = function(inputNum) {

  if (inputNum === 2 || inputNum === 3) {
    inputNum += " is prime";
    return inputNum;
  }
  if (inputNum === 1 || inputNum % 2 === 0) {
    inputNum += " is NOT prime";
    return inputNum;
  }
  let i = 3;
  while (i <= (inputNum / i)) {
    if (inputNum % i === 0) {
      inputNum += " is NOT prime";
      return inputNum;
    }
    i += 2;
  }
  inputNum += " is prime";
  return inputNum;
};

export default primeNumberOrNot;
