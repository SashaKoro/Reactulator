const factorial = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }
  if (String(inputNum).length > 3) {
    return "Infinity";
  }

  if (Object.is(inputNum, 0)) {
    return 1;
  }

  let i = (inputNum - 1);
  while (i > 1) {
    inputNum *= i;
    i -= 1;
  }
  return inputNum;
};

export default factorial;
