const factorial = (inputNum) => {
  let input = inputNum;
  if (/[a-z]/i.test(input)) {
    return input;
  } else if (String(input).length > 3) {
    return 'Infinity';
  } else if (input === 0) {
    return 1;
  }

  let i = (input - 1);
  while (i > 1) {
    input *= i;
    i -= 1;
  }

  return input;
};

export default factorial;
