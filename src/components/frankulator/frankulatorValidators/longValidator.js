const longValidator = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    if (/\+/.test(inputNum) !== true) {
      inputNum = "";
    }
  }
  if (inputNum === "") {
    return "Please enter a number";
  }

  inputNum = Number(inputNum);
  return inputNum;

};

export default longValidator;
