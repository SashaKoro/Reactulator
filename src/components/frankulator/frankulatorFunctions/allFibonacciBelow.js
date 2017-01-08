const allFibonacciBelow = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  switch(inputNum){
    case 0:
    case 1:
      return 0;
  }

  let firstFib = 1;
  let secondFib = 0;
  let SumOfFibonacciNums = 0;

  while (firstFib + secondFib < inputNum) {
    firstFib += secondFib;
    secondFib = (firstFib - secondFib);
    SumOfFibonacciNums += firstFib;
  }
  return SumOfFibonacciNums + 1;
};

export default allFibonacciBelow;
