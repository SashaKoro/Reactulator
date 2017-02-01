const woodallNumberOf = (inputNum) => {
  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  return String(inputNum * Math.pow(2, inputNum) - 1);
};

export default woodallNumberOf;
