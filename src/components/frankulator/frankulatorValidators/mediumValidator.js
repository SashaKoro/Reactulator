const mediumValidator = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    inputNum = "";
  }
  if (Object.is(inputNum, "")) {
    return "Please enter a number";
  }

  if (String(inputNum).length > 15) {
    return "Sorry, number is too long";
  }

  return Number(inputNum);

};

export default mediumValidator;
