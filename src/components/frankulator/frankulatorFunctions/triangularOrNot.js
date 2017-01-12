import * as is from "../stringConstants/stringConstants";

const triangularOrNot = inputNum => {

  if (/[a-z]/i.test(inputNum)) return inputNum;

  let triNum = 1, triAdd = 2;
  while (inputNum !== triNum) {
    if (triNum > inputNum) return inputNum + is.NOT_TRI;
    triNum += triAdd;
    triAdd ++;
  }
  return inputNum + is.TRI;
};

export default triangularOrNot;
