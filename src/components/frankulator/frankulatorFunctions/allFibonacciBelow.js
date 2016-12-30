const allFibonacciBelow = function(inputNum) {

  if (inputNum === 1 || inputNum === 0) {
    return 0;
  }

  let firstFib = 1;
  let secondFib = 0;
  let fibonacciSum = 0;

  while (firstFib + secondFib < inputNum) {
    firstFib += secondFib;
    secondFib = (firstFib - secondFib);
    fibonacciSum += firstFib;
  }
  return fibonacciSum + 1;
};

export default allFibonacciBelow;
