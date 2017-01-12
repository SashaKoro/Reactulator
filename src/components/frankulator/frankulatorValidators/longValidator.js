import * as is from '../stringConstants/stringConstants';

const longValidator = inputNum => {

  if (/[a-z]/i.test(inputNum) && !/\+/.test(inputNum)) inputNum = '';

  if (inputNum === "") return is.ENTER_A_NUMBER;

  return Number(inputNum);

};

export default longValidator;
