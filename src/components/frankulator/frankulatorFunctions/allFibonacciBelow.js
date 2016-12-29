const allFibonacciBelow = function(inputNum) {

  if ( /[a-z]/i.test(inputNum) === true || inputNum === ".") {
    if (/\+/.test(inputNum) !== true) {
      inputNum = "";
    }
  }

  if (inputNum === "") {
    return "Please enter a number";
  }
  inputNum = Number(inputNum);

  if (inputNum === 1 || inputNum === 0) {
    return 0;
  }

  let firstFib = 1;
  let secondFib = 0;
  let fib_Sum = 0;

  while (firstFib + secondFib < inputNum) {
    firstFib += secondFib;
    secondFib = (firstFib - secondFib);
    fib_Sum += firstFib;
  }
  return fib_Sum + 1;
};

export default allFibonacciBelow;
