const sumOfDigits = function(inputNum) {

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
