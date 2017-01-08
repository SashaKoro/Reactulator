const shortValidator = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    inputNum = "";
  }
  if (inputNum === "") {
    return "Please enter a number";
  }

  if (String(inputNum).length > 12) {
    return "Sorry, number is too long";
  }

  return Number(inputNum);

};

export default shortValidator;

