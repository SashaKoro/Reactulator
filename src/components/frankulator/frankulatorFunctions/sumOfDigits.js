const sumOfDigits = function(inputNum) {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  inputNum = Number(inputNum);
  let digitSum = 0;
  for (let i = 0; i < (String(inputNum).length); i ++) {
    if (String(inputNum).charAt(i) != ".") {
      digitSum += parseInt(String(inputNum).charAt(i));
    }
  }
  return digitSum;
};

export default sumOfDigits;
