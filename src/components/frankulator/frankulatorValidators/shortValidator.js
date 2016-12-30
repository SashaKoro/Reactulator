const shortValidator = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    inputNum = "";
  }
  if (inputNum === "") {
    return "Please enter a number";
  }

  if (String(inputNum).length > 12) {
    inputNum = "Sorry, number is too long";
    return inputNum;
  }

  inputNum = Number(inputNum);
  return inputNum;

};

export default shortValidator;

