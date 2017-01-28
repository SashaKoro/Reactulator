import * as is from '../stringConstants/stringConstants';

const triangularOrNot = (inputNum) => {
  if (/[a-z]/i.test(inputNum)) {
    return inputNum;
  }

  let triangularNumber = 0;
  let nextAddition = 1;
  while (triangularNumber < inputNum) {
    triangularNumber += nextAddition;
    nextAddition += 1;
  }

  return (inputNum === triangularNumber) ? `${inputNum}${is.TRI}` : `${inputNum}${is.NOT_TRI}`;
};

export default triangularOrNot;
