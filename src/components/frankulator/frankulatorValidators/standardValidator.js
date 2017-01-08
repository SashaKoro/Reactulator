const standardValidator = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    inputNum = "";
  }

  if (inputNum === "") {
    return "Please enter a number";
  }

  return Number(inputNum);

};

export default standardValidator;
