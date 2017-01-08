const factorial = inputNum => {

  switch(true){
    case (/[a-z]/i.test(inputNum)):
      return inputNum;
    case (String(inputNum).length > 3):
      return "Infinity";
    case inputNum === 0:
      return 1;
  }

  let i = (inputNum - 1);
  while (i > 1) {
    inputNum *= i;
    i --;
  }
  return inputNum;
};

export default factorial;
