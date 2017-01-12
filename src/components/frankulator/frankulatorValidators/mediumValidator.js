import * as is from "../stringConstants/stringConstants";

const mediumValidator = inputNum => {

  if (/[a-z]/i.test(inputNum)) inputNum = '';

  if (inputNum === '') return is.ENTER_A_NUMBER;

  if (String(inputNum).length > 15) return is.TOO_LONG;

  return Number(inputNum);

};

export default mediumValidator;
