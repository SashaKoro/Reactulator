const allFibonacciBelow = inputNum => {

  if (/[a-z]/i.test(inputNum)) return inputNum;

  if (inputNum === 0 || inputNum === 1) return 0;

  let firstFib = 1, secondFib = 0, SumOfFibonacciNums = 0;

  while (firstFib + secondFib < inputNum) {
    firstFib += secondFib;
    secondFib = (firstFib - secondFib);
    SumOfFibonacciNums += firstFib;
  }
  return SumOfFibonacciNums + 1;
};

export default allFibonacciBelow;
