const getAllDivisors = function(inputNum) {

  if (/[a-z]/i.test(inputNum) === true || inputNum === ".") {
    inputNum = "";
  }

  if (String(inputNum).length > 16) {
    inputNum = "Sorry, number is too long";
    return inputNum;
  }

  if (inputNum === "") {
    return "Please enter a number";
  }

  if (/\./.test(inputNum) === true) {
    inputNum = "Number must be an Integer";
    return inputNum;
  }

  inputNum = Number(inputNum);
  if (inputNum === 0) {
    return "infinite number of divisors";
  }

  let potentialDivisor = 1;
  let divisorCount = 0;
  while (potentialDivisor <= inputNum/potentialDivisor) {
    if (inputNum % potentialDivisor === 0) {
      if(potentialDivisor * potentialDivisor === inputNum) {
        divisorCount -= 1;
      }
      divisorCount += 2;
    }
    potentialDivisor += 1;
  }
  return divisorCount;
};

export default getAllDivisors;
