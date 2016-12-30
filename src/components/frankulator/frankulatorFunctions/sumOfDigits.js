const sumOfDigits = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  let inputString = String(inputNum), digitSum = 0;
  for (let character of inputString) {
    digitSum += parseInt(character);
  }
  return digitSum;
};

export default sumOfDigits;
