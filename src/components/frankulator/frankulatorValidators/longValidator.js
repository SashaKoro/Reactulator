const longValidator = inputNum => {

  if (/[a-z]/i.test(inputNum) && !/\+/.test(inputNum)) {
      inputNum = "";
  }

  if (inputNum === "") {
    return "Please enter a number";
  }

  return Number(inputNum);

};

export default longValidator;
