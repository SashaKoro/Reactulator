const triangularOrNot = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  let triNum = 1, triAdd = 2;
  while (inputNum != triNum) {
    if (triNum > inputNum) {
      return inputNum + " is NOT tri";
    }
    triNum += triAdd;
    triAdd += 1;
  }
  return inputNum + " is a tri number";
};

export default triangularOrNot;
