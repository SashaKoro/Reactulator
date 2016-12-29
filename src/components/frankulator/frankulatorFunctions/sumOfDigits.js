const sumOfDigits = function(inputNum) {

  if (/[a-z]/i.test(inputNum) === true || inputNum === ".") {
    inputNum = "";
  }
  if (inputNum === "") {
    return "Please enter a number";
  }
  inputNum = Number(inputNum);
  let dig_Sum = 0;
  for (let i = 0; i < (String(inputNum).length); i ++) {
    if (String(inputNum).charAt(i) != ".") {
      dig_Sum += parseInt(String(inputNum).charAt(i));
    }
  }
  return dig_Sum;
};

export default sumOfDigits;
