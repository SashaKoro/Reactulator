import * as is from '../stringConstants/stringConstants';

const standardValidator = inputNum => {

  if (/[a-z]/i.test(inputNum)) {
    inputNum = "";
  }

  if (inputNum === "") {
    return is.ENTER_A_NUMBER;
  }

  return Number(inputNum);

};

export default standardValidator;
