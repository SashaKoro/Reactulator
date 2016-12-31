const standardValidator = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    inputNum = "";
  }

  if (Object.is(inputNum, "")) {
    return "Please enter a number";
  }

  inputNum = Number(inputNum);
  return inputNum;

};

export default standardValidator;
