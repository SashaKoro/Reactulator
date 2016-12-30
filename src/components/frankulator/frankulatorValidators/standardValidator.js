const standardValidator = function(inputNum) {

  if (/[a-z]/i.test(inputNum)) {
    inputNum = "";
  }

  if (inputNum === "") {
    return "Please enter a number";
  }

  inputNum = Number(inputNum);
  return inputNum;

};

export default standardValidator;
